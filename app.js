import {
  saveSubmission, loadExamConfig, loadAllowedStudents, listenExamConfig
} from './supabase.js';

const DEFAULT_CONFIG = {
  hwQuestions:20, wordQuestions:5, excelQuestions:5,
  wordTasks:12, excelTasks:12, timeMinutes:45,
  selectionMode:'auto', manualQuestions:[], manualWordTasks:[], manualExcelTasks:[]
};

let studentName='', currentQ=0, QUESTIONS=[], WORD_TASKS=[], EXCEL_TASKS=[];
let userAnswers=[], mcqScore=0, timerInterval=null, timeLeft=2700;
let wordFileUploaded=false, excelFileUploaded=false;
let wordFileName='', excelFileName='', wordFileData=null, excelFileData=null;
let examSubmitted=false, examConfig=null;
let allowedStudents=[], submittedNames=new Set();

(function initParticles(){
  const canvas=document.getElementById('particles');
  const ctx=canvas.getContext('2d');
  let W,H,dots=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  function createDots(n){dots=[];for(let i=0;i<n;i++)dots.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.4,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,a:Math.random()*.6+.1});}
  function draw(){
    ctx.clearRect(0,0,W,H);
    dots.forEach(d=>{d.x+=d.vx;d.y+=d.vy;if(d.x<0)d.x=W;if(d.x>W)d.x=0;if(d.y<0)d.y=H;if(d.y>H)d.y=0;ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fillStyle=`rgba(59,139,255,${d.a})`;ctx.fill();});
    for(let i=0;i<dots.length;i++)for(let j=i+1;j<dots.length;j++){const dx=dots[i].x-dots[j].x,dy=dots[i].y-dots[j].y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<100){ctx.beginPath();ctx.moveTo(dots[i].x,dots[i].y);ctx.lineTo(dots[j].x,dots[j].y);ctx.strokeStyle=`rgba(59,139,255,${.12*(1-dist/100)})`;ctx.lineWidth=.6;ctx.stroke();}}
    requestAnimationFrame(draw);
  }
  resize();createDots(60);draw();
  window.addEventListener('resize',()=>{resize();createDots(60);});
})();

async function init(){
  try {
    const [config, students] = await Promise.all([
      loadExamConfig(),
      loadAllowedStudents()
    ]);
    examConfig = config ? {...DEFAULT_CONFIG, ...config} : {...DEFAULT_CONFIG};
    allowedStudents = students;

    listenExamConfig(cfg => {
      if(cfg) examConfig = {...DEFAULT_CONFIG, ...cfg};
      populateLandingConfig();
    });

    populateLandingConfig();
  } catch(e) {
    console.warn('Supabase not configured yet, using defaults:', e.message);
    examConfig = {...DEFAULT_CONFIG};
    allowedStudents = ['Zain','Laraib','Hassan'];
    populateLandingConfig();
  }
}

function populateLandingConfig(){
  if(!examConfig) return;
  const c = examConfig;
  const total = (c.hwQuestions||0)+(c.wordQuestions||0)+(c.excelQuestions||0);
  const setEl=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val;};
  setEl('lc-mcq', c.selectionMode==='manual' ? (c.manualQuestions||[]).length : total);
  setEl('lc-word-tasks', c.selectionMode==='manual' ? (c.manualWordTasks||[]).length : (c.wordTasks||0));
  setEl('lc-excel-tasks', c.selectionMode==='manual' ? (c.manualExcelTasks||[]).length : (c.excelTasks||0));
  setEl('lc-time', c.timeMinutes||45);
  setEl('eib-hw',    c.selectionMode==='manual' ? ((c.manualQuestions||[]).length)+' Qs (manual)' : (c.hwQuestions||0)+' Qs');
  setEl('eib-word',  c.selectionMode==='manual' ? '—' : (c.wordQuestions||0)+' Qs');
  setEl('eib-excel', c.selectionMode==='manual' ? '—' : (c.excelQuestions||0)+' Qs');
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>{
    if(s.classList.contains('active')){s.classList.add('screen-exit');setTimeout(()=>s.classList.remove('active','screen-exit'),340);}
  });
  setTimeout(()=>{const t=document.getElementById(id);t.classList.add('active','screen-enter');setTimeout(()=>t.classList.remove('screen-enter'),500);},280);
}

async function startExam(){
  const inp=document.getElementById('student-name');
  const errEl=document.getElementById('name-error');
  const raw=inp.value.trim();
  if(!raw){showNameError(inp,errEl,'⚠  Please enter your name first.');return;}

  const match=allowedStudents.find(n=>n.toLowerCase()===raw.toLowerCase());
  if(!match){showNameError(inp,errEl,'🚫  Your name is not on the registered student list. Contact your teacher.');return;}

  const btn = document.getElementById('btn-start');
  btn.disabled=true; btn.querySelector('span').textContent='Checking...';
  try {
    const { getSubmissions } = await import('./supabase.js');
    const subs = await getSubmissions();
    const already = subs.some(s=>s.studentName.toLowerCase()===raw.toLowerCase());
    if(already){
      btn.disabled=false; btn.querySelector('span').textContent='Start Exam';
      showNameError(inp,errEl,'🔒  You have already submitted this exam. Retakes are not allowed.');
      return;
    }
  } catch(e){
    console.warn('Could not check submissions:', e.message);
  }
  btn.disabled=false; btn.querySelector('span').textContent='Start Exam';

  studentName = match;
  const c = examConfig || DEFAULT_CONFIG;
  timeLeft = (c.timeMinutes||45) * 60;

  if(c.selectionMode==='manual'){
    QUESTIONS   = buildManualQuestions(c.manualQuestions||[]);
    const wt    = buildManualTasks(c.manualWordTasks||[], window.WORD_TASK_BANK);
    const et    = buildManualTasks(c.manualExcelTasks||[], window.EXCEL_TASK_BANK);
    WORD_TASKS  = wt.map((t,i)=>({...t,num:i+1}));
    EXCEL_TASKS = et.map((t,i)=>({...t,num:i+1}));
  } else {
    QUESTIONS = window.buildExamQuestions(c.hwQuestions||20, c.wordQuestions||5, c.excelQuestions||5);
    const tasks = window.buildPracticalTasks(c.wordTasks||12, c.excelTasks||12);
    WORD_TASKS  = tasks.wordTasks;
    EXCEL_TASKS = tasks.excelTasks;
  }

  userAnswers = new Array(QUESTIONS.length).fill(null);

  document.getElementById('eh-student').textContent=studentName;
  document.getElementById('ring-text').textContent='0/'+QUESTIONS.length;
  const setEl=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  setEl('mcq-score-total','/'+QUESTIONS.length);
  const wMarks=WORD_TASKS.reduce((s,t)=>s+t.marks,0);
  const eMarks=EXCEL_TASKS.reduce((s,t)=>s+t.marks,0);
  setEl('ptab-word-marks', wMarks+' Marks');
  setEl('ptab-excel-marks',eMarks+' Marks');

  buildTaskList('word-tasks',WORD_TASKS,false);
  buildTaskList('excel-tasks',EXCEL_TASKS,true);
  setupDragDrop('word-upload-zone','word-file','word');
  setupDragDrop('excel-upload-zone','excel-file','excel');
  startTimer(); renderQuestion(); updateProgress(); buildDots();
  showScreen('screen-mcq');
}

function showNameError(inp,errEl,msg){
  inp.style.borderColor='#ef4444';inp.style.boxShadow='0 0 0 4px rgba(239,68,68,.2)';
  errEl.style.display='block';errEl.textContent=msg;
  setTimeout(()=>{inp.style.borderColor='';inp.style.boxShadow='';errEl.style.display='none';},4500);
}

function startTimer(){
  const display=document.getElementById('timer-display');
  updateTimerDisplay(display);
  timerInterval=setInterval(()=>{timeLeft--;updateTimerDisplay(display);if(timeLeft<=0){clearInterval(timerInterval);showPractical();}},1000);
}
function updateTimerDisplay(display){
  const m=String(Math.floor(timeLeft/60)).padStart(2,'0');
  const s=String(timeLeft%60).padStart(2,'0');
  display.textContent=`${m}:${s}`;
  if(timeLeft<=300){display.classList.remove('warn');display.classList.add('danger');}
  else if(timeLeft<=600)display.classList.add('warn');
}

function renderQuestion(){
  const q=QUESTIONS[currentQ];
  const card=document.getElementById('mcq-card');
  card.style.animation='none';card.offsetHeight;card.style.animation='cardIn .35s ease';
  const tag=document.getElementById('mcq-section-tag');
  tag.textContent=q.section;
  const c=sectionColor(q.section);
  tag.style.background=c.bg;tag.style.color=c.text;tag.style.border=`1px solid ${c.border}`;
  document.getElementById('mcq-num').textContent=`Question ${currentQ+1} of ${QUESTIONS.length}`;
  document.getElementById('mcq-question').textContent=q.q;
  const optsEl=document.getElementById('mcq-options');optsEl.innerHTML='';
  ['A','B','C','D'].forEach((letter,i)=>{
    const div=document.createElement('div');
    div.className='mcq-option'+(userAnswers[currentQ]===i?' selected':'');
    div.innerHTML=`<div class="opt-letter">${letter}</div><div class="opt-text">${q.opts[i]}</div>`;
    div.addEventListener('click',()=>selectOption(i));
    optsEl.appendChild(div);
  });
  document.getElementById('btn-prev').style.display=currentQ===0?'none':'inline-flex';
  const btnNext=document.getElementById('btn-next');
  if(currentQ===QUESTIONS.length-1){btnNext.textContent='Finish MCQs ✓';btnNext.classList.add('finish');}
  else{btnNext.textContent='Next →';btnNext.classList.remove('finish');}
  updateProgress();updateDots();
}

function sectionColor(s){
  if(s==='Hardware')return{bg:'rgba(167,139,250,.12)',text:'#a78bfa',border:'rgba(167,139,250,.25)'};
  if(s==='MS Word')return{bg:'rgba(59,139,255,.12)',text:'#3b8bff',border:'rgba(59,139,255,.25)'};
  return{bg:'rgba(249,115,22,.12)',text:'#f97316',border:'rgba(249,115,22,.25)'};
}

function selectOption(idx){
  userAnswers[currentQ]=idx;
  document.querySelectorAll('.mcq-option').forEach((o,i)=>o.classList.toggle('selected',i===idx));
  updateDots();updateProgress();
  if(currentQ<QUESTIONS.length-1)setTimeout(()=>{currentQ++;renderQuestion();},420);
}

function nextQ(){if(currentQ===QUESTIONS.length-1){showPractical();return;}currentQ++;renderQuestion();}
function prevQ(){if(currentQ>0){currentQ--;renderQuestion();}}

function updateProgress(){
  const answered=userAnswers.filter(a=>a!==null).length;
  const total=QUESTIONS.length;
  document.getElementById('mcq-bar').style.width=(answered/total*100)+'%';
  document.getElementById('ring-text').textContent=`${answered}/${total}`;
  const circ=2*Math.PI*24;
  document.getElementById('ring-circle').style.strokeDashoffset=circ-(answered/total)*circ;
}

function buildDots(){
  const container=document.getElementById('mcq-dots');container.innerHTML='';
  QUESTIONS.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='mcq-dot'+(i===currentQ?' current':'');
    d.title=`Question ${i+1}`;
    d.addEventListener('click',()=>{currentQ=i;renderQuestion();});
    container.appendChild(d);
  });
}
function updateDots(){
  document.querySelectorAll('.mcq-dot').forEach((d,i)=>{
    d.className='mcq-dot';
    if(i===currentQ)d.classList.add('current');
    else if(userAnswers[i]!==null)d.classList.add('answered');
  });
}

function showPractical(){
  clearInterval(timerInterval);
  mcqScore=0;
  userAnswers.forEach((ans,i)=>{if(ans===QUESTIONS[i].ans)mcqScore++;});
  document.getElementById('prac-student').textContent=studentName;
  document.getElementById('mcq-score-display').textContent=mcqScore;
  showScreen('screen-practical');
}

function buildTaskList(containerId,tasks,isExcel){
  const container=document.getElementById(containerId);container.innerHTML='';
  tasks.forEach((t,idx)=>{
    const div=document.createElement('div');
    div.className='task-item'+(isExcel?' excel-ctx-task':'');
    div.style.animationDelay=(idx*0.04)+'s';
    div.innerHTML=`<div class="task-num">${t.num}</div><div class="task-body"><div class="task-desc">${t.desc}</div><span class="task-marks">${t.marks} Mark${t.marks>1?'s':''}</span></div>`;
    container.appendChild(div);
  });
}

function switchTab(tab){
  document.querySelectorAll('.ptab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  document.querySelectorAll('.prac-tab-content').forEach(c=>c.classList.toggle('active',c.id===`tab-${tab}`));
}

function handleFileUpload(type,input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const b64=e.target.result;
    if(type==='word'){wordFileUploaded=true;wordFileName=file.name;wordFileData=b64;}
    else{excelFileUploaded=true;excelFileName=file.name;excelFileData=b64;}
    const statusEl=document.getElementById(`${type}-file-status`);
    const zone=document.getElementById(`${type}-upload-zone`);
    statusEl.innerHTML=`✅ &nbsp;<strong>${file.name}</strong> uploaded! (${formatSize(file.size)})`;
    zone.style.borderColor='var(--green)';zone.style.background='rgba(34,197,94,.04)';
    const inner=zone.querySelector('.uz-inner');
    inner.querySelector('.uz-icon').textContent='✅';
    inner.querySelector('.uz-title').textContent='File Uploaded!';
    inner.querySelector('.uz-sub').textContent=file.name;
  };
  reader.readAsDataURL(file);
}
function formatSize(b){if(b<1024)return b+' B';if(b<1048576)return(b/1024).toFixed(1)+' KB';return(b/1048576).toFixed(2)+' MB';}

function setupDragDrop(zoneId,inputId,type){
  const zone=document.getElementById(zoneId);
  zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('drag-over');});
  zone.addEventListener('dragleave',()=>zone.classList.remove('drag-over'));
  zone.addEventListener('drop',e=>{
    e.preventDefault();zone.classList.remove('drag-over');
    const file=e.dataTransfer.files[0];
    if(file){const inp=document.getElementById(inputId);const dt=new DataTransfer();dt.items.add(file);inp.files=dt.files;handleFileUpload(type,inp);}
  });
}

async function submitExam(){
  if(examSubmitted)return;
  if(!wordFileUploaded||!excelFileUploaded){
    const missing=[];
    if(!wordFileUploaded)missing.push('Word (.docx)');
    if(!excelFileUploaded)missing.push('Excel (.xlsx)');
    if(!confirm(`⚠ You haven't uploaded your ${missing.join(' and ')} file${missing.length>1?'s':''}.\n\nSubmit anyway?`))return;
  }
  examSubmitted=true;
  mcqScore=0;
  userAnswers.forEach((ans,i)=>{if(ans!==null&&ans===QUESTIONS[i].ans)mcqScore++;});

  const btn=document.querySelector('.btn-submit');
  if(btn){btn.disabled=true;btn.querySelector('span').textContent='Submitting...';}

  const submission={
    studentName, mcqScore, mcqTotal:QUESTIONS.length,
    wordFileUploaded, wordFileName, wordFileData,
    excelFileUploaded, excelFileName, excelFileData,
    answersDetail:QUESTIONS.map((q,i)=>({
      num:i+1, section:q.section, topic:q.topic||'',
      question:q.q, options:q.opts,
      correctIndex:q.ans, givenIndex:userAnswers[i],
      correct:userAnswers[i]===q.ans
    })),
    wordTasks:WORD_TASKS, excelTasks:EXCEL_TASKS,
    examConfig: examConfig||DEFAULT_CONFIG,
    graded:false, wordGrade:null, excelGrade:null, totalGrade:null, teacherNote:''
  };

  try {
    await saveSubmission(submission);
    document.getElementById('sc-student-name').textContent=studentName;
    document.getElementById('sc-mcq').textContent=`${mcqScore} / ${QUESTIONS.length}`;
    document.getElementById('sc-word').textContent=wordFileUploaded?`✅ ${wordFileName}`:'⚠ Not uploaded';
    document.getElementById('sc-excel').textContent=excelFileUploaded?`✅ ${excelFileName}`:'⚠ Not uploaded';
    showScreen('screen-submitted');
  } catch(e) {
    examSubmitted=false;
    if(btn){btn.disabled=false;btn.querySelector('span').textContent='Submit & Send to Teacher';}
    alert('❌ Submission failed: '+e.message+'\n\nPlease check your internet connection and try again.');
  }
}

function buildManualQuestions(ids){
  return ids.map(id=>{
    const q=window.QUESTION_BANK.find(q=>q.id===id);
    return q?window.prepareQuestion(q):null;
  }).filter(Boolean);
}
function buildManualTasks(ids,bank){
  return ids.map(id=>bank.find(t=>t.id===id)).filter(Boolean);
}

document.getElementById('student-name').addEventListener('keydown',e=>{if(e.key==='Enter')startExam();});

window.startExam    = startExam;
window.nextQ        = nextQ;
window.prevQ        = prevQ;
window.switchTab    = switchTab;
window.submitExam   = submitExam;
window.handleFileUpload = handleFileUpload;

init();