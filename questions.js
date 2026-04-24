const QUESTION_BANK = [

  // ============================================================
  // SECTION: Operating System (Class 10)
  // ============================================================

  { id:1, section:"Software", topic:"Operating System",
    q:"Which of the following best describes the primary role of an Operating System?",
    opts:["It converts AC power to DC power for components","It acts as a bridge between hardware and user, managing all hardware resources","It stores boot instructions on a ROM chip","It renders graphics for display output"], ans:1, diff:"medium" },

  { id:2, section:"Software", topic:"Operating System",
    q:"During the boot process, what does BIOS/UEFI perform immediately after power is turned on?",
    opts:["It loads the desktop","It runs a Power-On Self Test (POST) to check all hardware","It opens Microsoft Word","It creates a restore point"], ans:1, diff:"medium" },

  { id:3, section:"Software", topic:"Operating System",
    q:"Which type of OS allows many users to connect and use the same computer simultaneously, managing each session separately?",
    opts:["Single-User OS","Multitasking OS","Multi-User OS","Real-Time OS"], ans:2, diff:"medium" },

  { id:4, section:"Software", topic:"Operating System",
    q:"A Multitasking OS can run many programs at the same time because the CPU:",
    opts:["Has unlimited cores","Switches between tasks so rapidly it appears simultaneous","Stores all programs in ROM","Runs each program in a separate BIOS"], ans:1, diff:"hard" },

  { id:5, section:"Software", topic:"Operating System",
    q:"Which is the CORRECT sequence of the boot process?",
    opts:["OS Loads → BIOS → POST → Desktop","BIOS → Desktop → POST → Power Button","Power Button → BIOS/UEFI → OS Loads → Desktop Ready","Desktop Ready → POST → BIOS → Power Button"], ans:2, diff:"hard" },

  { id:6, section:"Software", topic:"Operating System",
    q:"Device drivers are special programs the OS uses to communicate with:",
    opts:["Users via the keyboard","The internet","Hardware components","Other application software"], ans:2, diff:"medium" },

  { id:7, section:"Software", topic:"Operating System",
    q:"Which OS function is responsible for dividing CPU time among running programs?",
    opts:["File Management","Device Management","Process Management","User Interface"], ans:2, diff:"hard" },

  { id:8, section:"Software", topic:"Operating System",
    q:"Windows Server and Unix are examples of which type of Operating System?",
    opts:["Single-User OS","Multi-User OS","Embedded OS","Mobile OS"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: Software Types (Class 14)
  // ============================================================

  { id:9, section:"Software", topic:"Types of Software",
    q:"Which category of software manages hardware resources and provides a platform for other software to run?",
    opts:["Application Software","Utility Software","System Software","Firmware"], ans:2, diff:"easy" },

  { id:10, section:"Software", topic:"Types of Software",
    q:"WinRAR, CCleaner, and Disk Defragmenter are all examples of:",
    opts:["System Software","Application Software","Utility Software","Malware"], ans:2, diff:"medium" },

  { id:11, section:"Software", topic:"Types of Software",
    q:"Which statement about software is correct?",
    opts:["Software has physical form and can be touched","Software is a set of instructions with no physical form — it exists only as code","Software and hardware are the same thing","Software can only run on one operating system"], ans:1, diff:"easy" },

  { id:12, section:"Software", topic:"Types of Software",
    q:"The first software ever written is credited to which person, in the year 1843?",
    opts:["Alan Turing","Bill Gates","Ada Lovelace","Charles Babbage"], ans:2, diff:"hard" },

  // ============================================================
  // SECTION: Programming Languages (Class 15)
  // ============================================================

  { id:13, section:"Software", topic:"Programming Languages",
    q:"Which type of programming language is written closest to binary (0s and 1s) and is extremely fast but difficult to read?",
    opts:["High-Level Language","Scripting Language","Low-Level Language","Object-Oriented Language"], ans:2, diff:"medium" },

  { id:14, section:"Software", topic:"Programming Languages",
    q:"A Compiler differs from an Interpreter in that a Compiler:",
    opts:["Translates code line by line in real time","Shows errors immediately as each line runs","Translates the ENTIRE code at once and creates an executable file","Only works with Python and JavaScript"], ans:2, diff:"hard" },

  { id:15, section:"Software", topic:"Programming Languages",
    q:"Python is classified as which type of language?",
    opts:["Low-Level, Compiled","High-Level, Interpreted","Mid-Level, Compiled","Machine Code, Assembled"], ans:1, diff:"medium" },

  { id:16, section:"Software", topic:"Programming Languages",
    q:"Java's famous motto 'Write Once, Run Anywhere' is possible because it compiles to:",
    opts:["Machine code specific to each OS","An executable .exe file","Bytecode interpreted by the JVM","Assembly language"], ans:2, diff:"hard" },

  { id:17, section:"Software", topic:"Programming Languages",
    q:"C++ is primarily used to build which of the following types of programs?",
    opts:["Android mobile apps","AI and data science tools","Video games, operating systems, and browsers","Simple web pages"], ans:2, diff:"medium" },

  { id:18, section:"Software", topic:"Programming Languages",
    q:"An Interpreter shows errors:",
    opts:["Only after the entire program is scanned","Never — it compiles without showing errors","Immediately, as soon as a problematic line is reached","Only after creating an executable file"], ans:2, diff:"hard" },

  // ============================================================
  // SECTION: Viruses & Antivirus (Class 16)
  // ============================================================

  { id:19, section:"Software", topic:"Viruses & Antivirus",
    q:"Which type of virus infects executable files (.exe, .com) and activates when the infected program is run?",
    opts:["Boot Sector Virus","Macro Virus","File Infector Virus","Worm"], ans:2, diff:"medium" },

  { id:20, section:"Software", topic:"Viruses & Antivirus",
    q:"A Worm is different from a regular virus because it:",
    opts:["Attaches itself to .exe files","Requires a host file to spread","Replicates itself and spreads across networks WITHOUT needing a host file","Only infects boot sectors"], ans:2, diff:"hard" },

  { id:21, section:"Software", topic:"Viruses & Antivirus",
    q:"Ransomware attacks a computer by:",
    opts:["Deleting the operating system","Encrypting all the user's files and demanding payment for the decryption key","Slowing down the CPU by using all RAM","Displaying pop-up advertisements on the browser"], ans:1, diff:"medium" },

  { id:22, section:"Software", topic:"Viruses & Antivirus",
    q:"Which antivirus method detects NEW, previously unknown threats by analysing suspicious behaviour instead of matching known signatures?",
    opts:["Signature-Based Scanning","Quarantine","Heuristic Analysis","Real-Time Protection"], ans:2, diff:"hard" },

  { id:23, section:"Software", topic:"Viruses & Antivirus",
    q:"Sandboxing in antivirus software means:",
    opts:["Deleting all suspicious files permanently","Running a suspicious file in an isolated virtual environment to observe its behaviour","Blocking all internet access","Comparing a file against a known virus signature database"], ans:1, diff:"hard" },

  { id:24, section:"Software", topic:"Viruses & Antivirus",
    q:"A Boot Sector virus is particularly dangerous because it:",
    opts:["Spreads only through email attachments","Loads before the operating system even starts, making it extremely hard to detect","Only affects Word and Excel macros","Requires the user to double-click a file to activate"], ans:1, diff:"hard" },

  { id:25, section:"Software", topic:"Viruses & Antivirus",
    q:"A Trojan Horse differs from other malware because it:",
    opts:["Self-replicates across networks automatically","Disguises itself as a legitimate useful program to trick the user into installing it","Infects the boot sector of the hard drive","Only spreads through email worms"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: Cloud Computing (Class 17)
  // ============================================================

  { id:26, section:"Software", topic:"Cloud Computing",
    q:"Which type of cloud is dedicated exclusively to a single organization and is never shared with others?",
    opts:["Public Cloud","Hybrid Cloud","Private Cloud","Community Cloud"], ans:2, diff:"medium" },

  { id:27, section:"Software", topic:"Cloud Computing",
    q:"A Hybrid Cloud is best described as:",
    opts:["A cloud used only for gaming","A combination of public and private clouds connected together for flexibility","A cloud owned by many governments","Only used by universities"], ans:1, diff:"medium" },

  { id:28, section:"Software", topic:"Cloud Computing",
    q:"Which cloud storage service is fully integrated into Windows 10 and 11 and appears as a folder in File Explorer?",
    opts:["Google Drive","iCloud","Dropbox","Microsoft OneDrive"], ans:3, diff:"easy" },

  { id:29, section:"Software", topic:"Cloud Computing",
    q:"In cloud computing, what happens immediately after you send a request via your browser or app?",
    opts:["Data is saved to your local hard drive first","Your data travels over the internet to a remote data center for processing","The BIOS runs a POST check","Your RAM is cleared to free memory"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: Cybersecurity (Class 18)
  // ============================================================

  { id:30, section:"Software", topic:"Cybersecurity",
    q:"Which cyber threat involves flooding a website with enormous fake traffic to make it unavailable to real users?",
    opts:["Phishing","Spyware","DoS (Denial of Service) Attack","Social Engineering"], ans:2, diff:"medium" },

  { id:31, section:"Software", topic:"Cybersecurity",
    q:"'Spear Phishing' differs from regular Phishing in that it:",
    opts:["Attacks through infected USB drives","Is a targeted attack aimed at one specific person","Uses worms to self-replicate","Only works on mobile devices"], ans:1, diff:"hard" },

  { id:32, section:"Software", topic:"Cybersecurity",
    q:"Two-Factor Authentication (2FA) requires something you KNOW and something you:",
    opts:["See on screen","Have (like a phone for a code) and potentially something you ARE (biometric)","Download from the internet","Type in the URL bar"], ans:1, diff:"medium" },

  { id:33, section:"Software", topic:"Cybersecurity",
    q:"'Baiting' in social engineering involves:",
    opts:["Sending fake emails pretending to be a bank","Leaving a USB drive somewhere hoping someone plugs it in out of curiosity","Following an employee through a secure door","Flooding a server with traffic"], ans:1, diff:"hard" },

  { id:34, section:"Software", topic:"Cybersecurity",
    q:"A DDoS attack is more powerful than a DoS attack because it uses:",
    opts:["A faster internet connection","A single very powerful server","Thousands of hacked computers (a botnet) all attacking at once","Ransomware to encrypt the target first"], ans:2, diff:"hard" },

  // ============================================================
  // SECTION: AI Basics (Class 19)
  // ============================================================

  { id:35, section:"Software", topic:"Artificial Intelligence",
    q:"Artificial Intelligence is best defined as:",
    opts:["Hardware that performs calculations faster than humans","Software that enables machines to think, learn, and make decisions like humans","The internet connected to physical robots","A type of operating system for servers"], ans:1, diff:"easy" },

  { id:36, section:"Software", topic:"Artificial Intelligence",
    q:"Which of the following is NOT a real-world example of AI taught in class?",
    opts:["Siri","ChatGPT","Google Assistant","Microsoft Excel AutoFill"], ans:3, diff:"medium" },

  { id:37, section:"Software", topic:"Artificial Intelligence",
    q:"In the AI process cycle, after data is input and processed by the model, what does the AI produce?",
    opts:["A new hardware component","A smart response or prediction (output)","A compiled executable file","A new operating system"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: Internet & WWW (Class 20)
  // ============================================================

  { id:38, section:"Software", topic:"Internet & WWW",
    q:"The World Wide Web (WWW) is:",
    opts:["The same as the Internet","A collection of web pages linked together that runs ON TOP of the internet","The physical cables connecting computers worldwide","An email protocol"], ans:1, diff:"medium" },

  { id:39, section:"Software", topic:"Internet & WWW",
    q:"What is the role of DNS in internet browsing?",
    opts:["It encrypts your data for security","It converts domain names (like google.com) into IP addresses","It stores web pages on your computer","It provides your computer's MAC address"], ans:1, diff:"medium" },

  { id:40, section:"Software", topic:"Internet & WWW",
    q:"In Google Search, what is the 'Indexing' stage?",
    opts:["Google bots visit every webpage and read its content","Google saves and organizes all crawled pages in a giant database called the Search Index","Google picks the most relevant and trusted pages to display","Google encrypts search results for security"], ans:1, diff:"hard" },

  // ============================================================
  // SECTION: Input & Output Devices (Class 11)
  // ============================================================

  { id:41, section:"Hardware", topic:"Input & Output Devices",
    q:"DPI (Dots Per Inch) in the context of a mouse refers to:",
    opts:["The print quality of a connected printer","The number of pixels the cursor moves per inch of physical movement — higher DPI = faster cursor","The resolution of the monitor connected","The speed of the USB connection"], ans:1, diff:"hard" },

  { id:42, section:"Hardware", topic:"Input & Output Devices",
    q:"Which printer type is best for high-speed, cost-effective text printing in an office environment?",
    opts:["Inkjet Printer","Dot Matrix Printer","3D Printer","Laser Printer"], ans:3, diff:"medium" },

  { id:43, section:"Hardware", topic:"Input & Output Devices",
    q:"A monitor's 'refresh rate' measured in Hertz (Hz) refers to:",
    opts:["How bright the screen is","How many times per second the screen updates/redraws the image","The resolution of the display","The power consumption of the monitor"], ans:1, diff:"medium" },

  { id:44, section:"Hardware", topic:"Input & Output Devices",
    q:"Which input device type converts physical documents or photos into digital files for computer use?",
    opts:["Webcam","Microphone","Scanner","Touchpad"], ans:2, diff:"easy" },

  { id:45, section:"Hardware", topic:"Input & Output Devices",
    q:"What is the key difference between Input and Output devices in terms of data direction?",
    opts:["Input devices receive from computer, output sends to computer","Both input and output devices send data to the computer","Input sends data TO the computer, output receives data FROM the computer","There is no difference — they both process data"], ans:2, diff:"easy" },

  { id:46, section:"Hardware", topic:"Input & Output Devices",
    q:"A Dot Matrix printer produces output by:",
    opts:["Spraying liquid ink cartridges onto paper","Using pins to strike an ink ribbon against paper, producing characters","Using laser beams and toner powder","Melting plastic filament layer by layer"], ans:1, diff:"hard" },

  // ============================================================
  // SECTION: PSU (Class 12)
  // ============================================================

  { id:47, section:"Hardware", topic:"Power Supply Unit",
    q:"A PSU (Power Supply Unit) converts which type of current from the wall outlet into usable power for computer components?",
    opts:["DC to AC","AC (Alternating Current) to DC (Direct Current)","High DC to Low DC","AC to AC at a lower voltage"], ans:1, diff:"medium" },

  { id:48, section:"Hardware", topic:"Power Supply Unit",
    q:"The 24-pin ATX connector on a PSU is used to supply power to:",
    opts:["The graphics card (GPU)","The main motherboard","Individual SSD drives","CPU cooling fans only"], ans:1, diff:"medium" },

  { id:49, section:"Hardware", topic:"Power Supply Unit",
    q:"In a Fully Modular PSU, which cables are attached by default?",
    opts:["All cables are permanently attached","Only the 24-pin and CPU cables are fixed; others are detachable","No cables — all are detachable and added as needed","Only PCIe cables are fixed"], ans:2, diff:"hard" },

  { id:50, section:"Hardware", topic:"Power Supply Unit",
    q:"The 80+ efficiency rating on a PSU indicates:",
    opts:["The PSU can deliver exactly 80W of power","How much of the power drawn from the wall actually reaches the computer's components (higher = less wasted as heat)","The PSU has 80 internal components","The PSU supports up to 80 connected devices"], ans:1, diff:"hard" },

  { id:51, section:"Hardware", topic:"Power Supply Unit",
    q:"Which internal PSU component converts AC power into unsmoothed DC power (raw DC)?",
    opts:["Transformer","Filter Capacitors","Rectifier","Voltage Regulator"], ans:2, diff:"hard" },

  { id:52, section:"Hardware", topic:"Power Supply Unit",
    q:"A high-end gaming PC requiring a GPU, fast CPU, and multiple drives would typically need a PSU of at least:",
    opts:["150–200W","300–400W","750–850W","50–100W"], ans:2, diff:"medium" },

  // ============================================================
  // SECTION: GPU (Class 13)
  // ============================================================

  { id:53, section:"Hardware", topic:"GPU",
    q:"A dedicated GPU differs from an integrated GPU primarily because it has:",
    opts:["Less power consumption and shares system RAM","Its own separate VRAM and delivers higher performance for demanding tasks","A built-in CPU inside it","Lower heat output and cheaper production cost"], ans:1, diff:"medium" },

  { id:54, section:"Hardware", topic:"GPU",
    q:"Why is a GPU better suited than a CPU for rendering graphics?",
    opts:["A GPU has a higher clock speed than a CPU","A GPU has thousands of cores optimized for parallel processing of many small tasks simultaneously","A GPU is physically larger than a CPU","A GPU directly controls the RAM modules"], ans:1, diff:"hard" },

  { id:55, section:"Hardware", topic:"GPU",
    q:"Which of the following is an example of a PROFESSIONAL dedicated GPU used in AI and data centres?",
    opts:["Intel UHD Graphics","AMD Radeon Vega","NVIDIA A100 / H100","Apple M-series GPU"], ans:2, diff:"hard" },

  { id:56, section:"Hardware", topic:"GPU",
    q:"An integrated GPU is commonly found in which type of device?",
    opts:["High-end gaming desktops","AI workstations","Laptops and budget PCs — it is built into the CPU and shares system RAM","Dedicated render farms"], ans:2, diff:"easy" },

  { id:57, section:"Hardware", topic:"GPU",
    q:"Beyond gaming, GPUs are now also heavily used for:",
    opts:["Managing file systems and storage","AI and machine learning, scientific simulations, and cryptocurrency mining","Replacing RAM in budget systems","Running BIOS firmware"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: MS WORD — Mail Merge (Class 11)
  // ============================================================

  { id:58, section:"MS Word", topic:"Mail Merge",
    q:"In Mail Merge, what is the 'Main Document'?",
    opts:["The Excel file with the recipients' data","The template letter or document with merge field placeholders","The final merged output file","The Outlook contacts list"], ans:1, diff:"medium" },

  { id:59, section:"MS Word", topic:"Mail Merge",
    q:"In your Excel data source for Mail Merge, what MUST the first row always contain?",
    opts:["Blank cells to separate header from data","Column headers that become the merge field names (e.g., FirstName, LastName)","The total number of recipients","Page break indicators"], ans:1, diff:"medium" },

  { id:60, section:"MS Word", topic:"Mail Merge",
    q:"To insert a personalized field (like a recipient's name) into your Mail Merge letter, you use:",
    opts:["Insert → Table","Mailings → Insert Merge Field","References → Insert Citation","Review → New Comment"], ans:1, diff:"easy" },

  { id:61, section:"MS Word", topic:"Mail Merge",
    q:"When you choose 'Finish & Merge → Edit Individual Documents', the result is:",
    opts:["The printer starts printing immediately","All merged letters are created as a single new Word file that can be saved and printed later","Outlook sends emails to all recipients","Only the first letter is generated"], ans:1, diff:"hard" },

  { id:62, section:"MS Word", topic:"Mail Merge",
    q:"Which of the following would BREAK a Mail Merge data source in Excel?",
    opts:["Having column headers in the first row","Using short header names without spaces","Having blank rows or merged cells in the Excel data","Using a separate Excel sheet for data"], ans:2, diff:"hard" },

  // ============================================================
  // SECTION: MS WORD — Track Changes & Comments (Class 12)
  // ============================================================

  { id:63, section:"MS Word", topic:"Track Changes",
    q:"The keyboard shortcut to toggle Track Changes ON or OFF is:",
    opts:["Ctrl + T","Ctrl + Shift + E","Ctrl + Alt + T","F7"], ans:1, diff:"medium" },

  { id:64, section:"MS Word", topic:"Track Changes",
    q:"When you 'Reject All Changes' in Track Changes, what happens?",
    opts:["All tracked changes are permanently applied to the document","All tracked edits are undone and the document reverts to its original text","All comments are deleted","The document is saved automatically"], ans:1, diff:"medium" },

  { id:65, section:"MS Word", topic:"Track Changes",
    q:"In MS Word, 'Resolving' a comment means:",
    opts:["Permanently deleting the comment and its text","Marking the comment as addressed without deleting it — it is greyed out","Converting the comment into a footnote","Accepting all tracked changes in the document"], ans:1, diff:"hard" },

  { id:66, section:"MS Word", topic:"Track Changes",
    q:"Track Changes is especially useful in which of the following scenarios?",
    opts:["Formatting a poster with colors and shapes","Legal teams reviewing contract documents where every change must be recorded","Inserting images and charts into presentations","Running a Spell Check on a short essay"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: MS WORD — Macros & AutoText (Class 13)
  // ============================================================

  { id:67, section:"MS Word", topic:"Macros & AutoText",
    q:"Where are Word Macros saved by default for global use across all documents?",
    opts:["On the Desktop as a .exe file","In the Normal.dotm template file","In the Windows Registry","In a dedicated .macro file in the Word folder"], ans:1, diff:"hard" },

  { id:68, section:"MS Word", topic:"Macros & AutoText",
    q:"To insert a saved AutoText entry, you type its name and then press:",
    opts:["Enter","Ctrl + V","F3","Tab"], ans:2, diff:"medium" },

  { id:69, section:"MS Word", topic:"Macros & AutoText",
    q:"To save text as an AutoText entry, you go to:",
    opts:["File → Save As → AutoText","Insert → Quick Parts → AutoText → Save Selection to AutoText Gallery","Review → New Comment → Save as AutoText","Home → Styles → New AutoText Style"], ans:1, diff:"hard" },

  { id:70, section:"MS Word", topic:"Macros & AutoText",
    q:"A Macro in MS Word is best described as:",
    opts:["A type of watermark placed behind document text","A recorded sequence of actions that can be replayed with one click or shortcut","A citation style for referencing sources","A type of section break between document pages"], ans:1, diff:"easy" },

  // ============================================================
  // SECTION: MS WORD — Digital Signatures & Document Protection (Class 14)
  // ============================================================

  { id:71, section:"MS Word", topic:"Document Protection",
    q:"When a document is 'Marked as Final' in MS Word, it becomes:",
    opts:["Fully encrypted with a password — unreadable without the key","Read-only — editing is discouraged but the document is NOT password locked","Permanently deleted from the recycle bin","Converted automatically to a PDF"], ans:1, diff:"hard" },

  { id:72, section:"MS Word", topic:"Document Protection",
    q:"To restrict who can edit a document in MS Word, you use:",
    opts:["Insert → Signature Line → Restrict Access","Review → Restrict Editing → Set limits and click Yes, Start Enforcing Protection","File → Save As → Read Only","Design → Page Color → Lock Page"], ans:1, diff:"medium" },

  { id:73, section:"MS Word", topic:"Document Protection",
    q:"A Digital Signature in MS Word serves which purpose?",
    opts:["It inserts a decorative handwritten signature image","It verifies the identity of the signer and confirms the document has not been tampered with after signing","It automatically formats the document for legal use","It locks the document from printing"], ans:1, diff:"medium" },

  { id:74, section:"MS Word", topic:"Document Protection",
    q:"Password Protection in MS Word is found under:",
    opts:["Review → Protect Document → Encrypt with Password","File → Info → Protect Document → Encrypt with Password","Design → Page Background → Set Password","View → Slide Master → Add Password"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: MS WORD — Citations & Bibliography (Class 15)
  // ============================================================

  { id:75, section:"MS Word", topic:"Citations & Bibliography",
    q:"To automatically generate a full Bibliography after adding citations, you go to:",
    opts:["Insert → Table of Contents → Bibliography Style","References → Bibliography → Choose a style (APA, MLA, Chicago)","Review → Manage Sources → Generate List","File → Export → References"], ans:1, diff:"medium" },

  { id:76, section:"MS Word", topic:"Citations & Bibliography",
    q:"The APA citation style is most commonly used in which academic fields?",
    opts:["History and Social Sciences","Literature, Arts and Humanities","Psychology, Education, and Sciences","Law and legal studies"], ans:2, diff:"hard" },

  { id:77, section:"MS Word", topic:"Citations & Bibliography",
    q:"What keyboard shortcut updates all citations and bibliography fields in an MS Word document?",
    opts:["F5","F7","F9","Ctrl + U"], ans:2, diff:"hard" },

  { id:78, section:"MS Word", topic:"Citations & Bibliography",
    q:"In MS Word's citation system, the 'Master List' refers to:",
    opts:["The list of all Heading styles in the document","A permanent store of sources saved on your computer that can be reused across any document","The table of contents generated from headings","A list of all comments and tracked changes"], ans:1, diff:"hard" },

  // ============================================================
  // SECTION: MS EXCEL — VLOOKUP (Class 11)
  // ============================================================

  { id:79, section:"MS Excel", topic:"VLOOKUP",
    q:"In the VLOOKUP formula =VLOOKUP(A2, $B$2:$D$10, 2, FALSE), what does the '2' represent?",
    opts:["The row number to return","The number of rows to search","The column number within the table_array to return the result from","The maximum number of matches allowed"], ans:2, diff:"medium" },

  { id:80, section:"MS Excel", topic:"VLOOKUP",
    q:"What error does VLOOKUP return when the lookup value is NOT found in the table?",
    opts:["#REF!","#VALUE!","#N/A","#DIV/0!"], ans:2, diff:"medium" },

  { id:81, section:"MS Excel", topic:"VLOOKUP",
    q:"To prevent VLOOKUP from breaking when you copy a formula down a column, you should use $ signs on the table_array because:",
    opts:["It makes the formula run faster","It locks the table reference as an absolute reference so it does not shift when copied","It converts the formula to an approximate match","It prevents #REF! errors from column deletions"], ans:1, diff:"hard" },

  { id:82, section:"MS Excel", topic:"VLOOKUP",
    q:"VLOOKUP can ONLY search for the lookup value in which position within the table_array?",
    opts:["Any column in the table","The last column of the table","The first column (leftmost) of the table","A named range anywhere in the workbook"], ans:2, diff:"hard" },

  // ============================================================
  // SECTION: MS EXCEL — HLOOKUP (Class 12)
  // ============================================================

  { id:83, section:"MS Excel", topic:"HLOOKUP",
    q:"HLOOKUP searches for a value in which part of the table?",
    opts:["The first COLUMN (leftmost)","The last ROW","The first ROW (top row)","Any cell in the middle of the table"], ans:2, diff:"medium" },

  { id:84, section:"MS Excel", topic:"HLOOKUP",
    q:"In =HLOOKUP('Feb', A1:E3, 2, FALSE), the value '2' refers to:",
    opts:["The second column of the table","The row number from which to return the value (Row 2 of the table)","The number of columns to search","The FALSE equivalent for exact match"], ans:1, diff:"hard" },

  { id:85, section:"MS Excel", topic:"HLOOKUP",
    q:"HLOOKUP is best suited for data arranged with:",
    opts:["ID-based records in vertical lists","Monthly or quarterly headers across the top row","Random unsorted data","Data in a single column"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: MS EXCEL — INDEX & MATCH (Class 13)
  // ============================================================

  { id:86, section:"MS Excel", topic:"INDEX & MATCH",
    q:"What does the MATCH function return?",
    opts:["The actual value found in the cell","The relative position (row or column number) of a value within a range","The sum of all matching values","The number of matches found"], ans:1, diff:"medium" },

  { id:87, section:"MS Excel", topic:"INDEX & MATCH",
    q:"In =INDEX(C2:C100, MATCH('Alice', A2:A100, 0)), what is MATCH('Alice', A2:A100, 0) doing?",
    opts:["Returning Alice's actual score from column C","Counting how many times Alice appears in column A","Finding Alice's row position in column A to pass to INDEX","Checking if Alice's name is spelled correctly"], ans:2, diff:"hard" },

  { id:88, section:"MS Excel", topic:"INDEX & MATCH",
    q:"A key advantage of INDEX+MATCH over VLOOKUP is that INDEX+MATCH can:",
    opts:["Only work with text data","Look up values in ANY direction — left, right, up, or down — not just left-to-right","Only work on sheets with fewer than 100 rows","Automatically sort the data before searching"], ans:1, diff:"hard" },

  { id:89, section:"MS Excel", topic:"INDEX & MATCH",
    q:"When you insert a new column in the middle of a VLOOKUP table, the formula often breaks. INDEX+MATCH handles this because:",
    opts:["It automatically updates the column index number","It references the return column by name/range rather than by number — so it works fine","It ignores newly inserted columns","It uses a dynamic array that expands automatically"], ans:1, diff:"hard" },

  // ============================================================
  // SECTION: MS EXCEL — COUNTIF, SUMIF, AVERAGEIF (Class 14)
  // ============================================================

  { id:90, section:"MS Excel", topic:"Conditional Functions",
    q:"The SUMIF function syntax is =SUMIF(range, criteria, sum_range). What does 'sum_range' specify?",
    opts:["The range to check the condition against","The criteria (condition) to test","The range of values to ADD UP when the condition is met","The output cell where the result appears"], ans:2, diff:"hard" },

  { id:91, section:"MS Excel", topic:"Conditional Functions",
    q:"=COUNTIF(B2:B10, 'Pass') counts:",
    opts:["The total marks of all students who passed","How many cells in B2:B10 contain the word 'Pass'","The average of all Pass grades","The row number of the first 'Pass' entry"], ans:1, diff:"medium" },

  { id:92, section:"MS Excel", topic:"Conditional Functions",
    q:"AVERAGEIF calculates the average of values in a range but ONLY for rows where:",
    opts:["The values are above zero","A specific condition in a criteria range is met","All cells in the row are filled","The values are text, not numbers"], ans:1, diff:"medium" },

  // ============================================================
  // SECTION: MS EXCEL — Advanced Data Validation (Class 15)
  // ============================================================

  { id:93, section:"MS Excel", topic:"Advanced Data Validation",
    q:"In Advanced Data Validation, using =INDIRECT(B1) as the source for a dropdown creates which type of functionality?",
    opts:["A simple list from a fixed range","A password-protected dropdown","A dependent (cascading) dropdown where options change based on another cell's value","A dropdown that only allows numbers"], ans:2, diff:"hard" },

  { id:94, section:"MS Excel", topic:"Advanced Data Validation",
    q:"The 'Stop' error alert style in Data Validation means:",
    opts:["A warning is shown but the user can still enter the invalid data","The invalid entry is allowed but flagged in red","The entry is completely blocked — the user cannot continue until valid data is entered","The cell is locked permanently"], ans:2, diff:"hard" },

  { id:95, section:"MS Excel", topic:"Advanced Data Validation",
    q:"When creating dependent dropdown lists in Excel, why must the named range exactly match the selection in the first dropdown?",
    opts:["For colour coding purposes only","Because INDIRECT(B1) converts the cell's text into a range name — the name must match exactly for it to find the correct list","Excel requires all named ranges to be identical","To prevent circular reference errors"], ans:1, diff:"hard" },

  // ============================================================
  // SECTION: MS POWERPOINT — Basics & Animations (Class 16–17)
  // ============================================================

  { id:96, section:"MS PowerPoint", topic:"PPT Basics",
    q:"What is the file extension for a Microsoft PowerPoint presentation?",
    opts:[".docx",".xlsx",".pptx",".ppsx"], ans:2, diff:"easy" },

  { id:97, section:"MS PowerPoint", topic:"PPT Basics",
    q:"In PowerPoint, the 'Notes Panel' is used for:",
    opts:["Embedding hidden slides","Storing speaker notes that the audience does not see during the presentation","Creating slide transitions","Animating text on a slide"], ans:1, diff:"easy" },

  { id:98, section:"MS PowerPoint", topic:"Animations & Transitions",
    q:"Which animation timing option causes an animation to start AUTOMATICALLY after the previous animation finishes?",
    opts:["On Click","With Previous","After Previous","On Load"], ans:2, diff:"medium" },

  { id:99, section:"MS PowerPoint", topic:"Animations & Transitions",
    q:"The 'Morph' transition in PowerPoint creates:",
    opts:["A simple fade between two slides","Smooth animated movement of objects that exist on both the current and next slide","A random sequence of all available transitions","A spinning 3D cube effect"], ans:1, diff:"hard" },

  { id:100, section:"MS PowerPoint", topic:"Animations & Transitions",
    q:"To reorder the sequence of animations on a slide, you use the:",
    opts:["Slide Master","Design tab → Variants panel","Animation Pane (View → Animation Pane) — drag items to reorder","Transitions tab → Timing group"], ans:2, diff:"medium" },

  // ============================================================
  // SECTION: MS POWERPOINT — Slide Master (Class 18)
  // ============================================================

  { id:101, section:"MS PowerPoint", topic:"Slide Master",
    q:"The main purpose of Slide Master in PowerPoint is to:",
    opts:["Create individual animations for each slide","Allow one change to the master to instantly update fonts, colors, and layouts on ALL slides","Protect the presentation with a password","Add notes visible only to the speaker"], ans:1, diff:"medium" },

  { id:102, section:"MS PowerPoint", topic:"Slide Master",
    q:"In Slide Master view, the TOPMOST (largest) slide at the top of the left panel is the:",
    opts:["Title Slide Layout","Blank Layout","Master Slide — edits here apply to every slide in the presentation","Content Layout"], ans:2, diff:"medium" },

  { id:103, section:"MS PowerPoint", topic:"Slide Master",
    q:"To open Slide Master view, you go to:",
    opts:["Insert → Slide Master","Design → Edit Master","View → Slide Master","Home → Layout → Master View"], ans:2, diff:"easy" },

  { id:104, section:"MS PowerPoint", topic:"Slide Master",
    q:"According to the class notes, Slide Master was first introduced in which version of PowerPoint?",
    opts:["PowerPoint 2003","PowerPoint 2007","PowerPoint 97","PowerPoint 2016"], ans:2, diff:"hard" },

  { id:105, section:"MS PowerPoint", topic:"Slide Master",
    q:"A logo inserted on the Slide Master slide will appear on:",
    opts:["Only the title slide","Only slides that use the 'Title and Content' layout","Every single slide in the presentation automatically","Only slides you manually drag it onto"], ans:2, diff:"medium" },

  // ============================================================
  // SECTION: MS POWERPOINT — Charts, Tables & SmartArt (Class 19)
  // ============================================================

  { id:106, section:"MS PowerPoint", topic:"Charts & SmartArt",
    q:"To insert a Chart in PowerPoint, you go to:",
    opts:["Design → Insert Chart","View → Chart Gallery","Insert → Chart → Choose type","Home → Drawing → Chart"], ans:2, diff:"easy" },

  { id:107, section:"MS PowerPoint", topic:"Charts & SmartArt",
    q:"Which SmartArt category is best for showing a step-by-step process or workflow?",
    opts:["Hierarchy","Cycle","Process","Matrix"], ans:2, diff:"medium" },

  { id:108, section:"MS PowerPoint", topic:"Charts & SmartArt",
    q:"The professional design rule '6×6 Rule' in presentations means:",
    opts:["Use 6 slides maximum with 6 images each","No more than 6 bullet points per slide and 6 words per bullet point","Use 6 colors and 6 fonts maximum","Each slide takes exactly 6 seconds to read"], ans:1, diff:"medium" },

  { id:109, section:"MS PowerPoint", topic:"Charts & SmartArt",
    q:"Using Sans-Serif fonts (like Calibri, Arial) in PowerPoint presentations is recommended because they are:",
    opts:["More decorative and visually impressive","Easier to read on screen especially from the back of a room","Compatible with more operating systems","Required by professional printing standards"], ans:1, diff:"medium" },

  { id:110, section:"MS PowerPoint", topic:"Charts & SmartArt",
    q:"When delivering a presentation, which of the following is a common mistake to avoid?",
    opts:["Making eye contact with the audience","Speaking slowly and clearly","Reading directly off the slides word-for-word","Using high-contrast text vs background"], ans:2, diff:"easy" },

];

// ============================================================
// WORD TASK BANK — Multiple question sets with full data
// ============================================================

const WORD_TASK_BANK = [

  // --- QUESTION SET 1: REPORT DOCUMENT ---
  { id:"W01", marks:2, topic:"Mail Merge",
    desc:"Create an Excel file with columns: <strong>FirstName, LastName, City, Grade</strong>. Add at least 6 student records. Then open Word → <strong>Mailings tab → Start Mail Merge → Letters</strong>. Select Recipients using your Excel file. Write a short invitation letter using merge fields: <em>Dear «FirstName» «LastName», your result from «City» is: «Grade».</em> Preview Results and Finish & Merge → Edit Individual Documents." },

  { id:"W02", marks:3, topic:"Table of Contents",
    desc:"Open a Word document. Type 5 section headings and apply <strong>Heading 1</strong> style to each. Add 2 paragraphs of body text below each heading. Then go to <strong>References → Table of Contents → Automatic Table 1</strong>. The TOC must show all 5 sections with correct page numbers. After completing the document, <strong>right-click the TOC → Update Field → Update Entire Table</strong>." },

  { id:"W03", marks:2, topic:"Citations & Bibliography",
    desc:"In a Word document, write a paragraph referencing a fact. Go to <strong>References → Insert Citation → Add New Source</strong>. Add 3 sources: one Book, one Website, and one Journal. Insert citations at relevant points in the text. Then go to <strong>References → Bibliography</strong> and choose <em>APA style</em>. A formatted bibliography must appear at the end of the document." },

  { id:"W04", marks:2, topic:"Track Changes",
    desc:"Open a Word document with at least 2 paragraphs. Go to <strong>Review tab → Track Changes → Track Changes (Ctrl+Shift+E)</strong> to turn it ON. Make 5 edits: add a sentence, delete a word, change a font, bold a phrase, and correct a spelling mistake. Then <strong>Accept 3 changes</strong> and <strong>Reject 2 changes</strong>. Also add 2 comments using <strong>Review → New Comment</strong> and resolve one of them." },

  { id:"W05", marks:2, topic:"Digital Signature & Protection",
    desc:"Open a Word document. Go to <strong>File → Info → Protect Document → Encrypt with Password</strong>. Set the password to <em>IT2026</em>. Close and reopen — confirm it asks for the password. Then in a different document, go to <strong>Review → Restrict Editing</strong>, allow only <em>'No changes (Read only)'</em>, and click <em>Yes, Start Enforcing Protection</em>. Set a password for the restriction." },

  { id:"W06", marks:2, topic:"Macros",
    desc:"Open MS Word. Go to <strong>View → Macros → Record Macro</strong>. Name it <em>FormatTitle</em> and assign a keyboard shortcut (e.g., Ctrl+Shift+F). Record the following actions: change font to <strong>Arial Black</strong>, size <strong>16</strong>, color <strong>Dark Blue</strong>, and apply <strong>Center alignment</strong>. Stop recording. Test your macro on a new paragraph using the shortcut key." },

  { id:"W07", marks:2, topic:"AutoText",
    desc:"In MS Word, type your full school name and address as a block of text. Select it all. Go to <strong>Insert → Quick Parts → AutoText → Save Selection to AutoText Gallery</strong>. Name the entry <em>SchoolHeader</em>. Click OK. Open a new blank document and type <em>SchoolHeader</em> then press <strong>F3</strong>. The full block should appear instantly. Practice inserting it 3 times in different locations." },

  { id:"W08", marks:3, topic:"Poster / Flyer Design",
    desc:"Create an IT event poster in Word. Go to <strong>Layout → Margins → Narrow</strong>. Set <strong>Design → Page Color</strong> to a dark color of choice. Insert at least 3 <strong>Shapes</strong> (Insert → Shapes) as design elements. Add a <strong>Text Box</strong> (Insert → Text Box) for the event title: <em>'Annual IT Exhibition 2026'</em>. Insert an <strong>Online Picture</strong> relevant to technology. Use maximum 3 fonts and ensure high contrast between text and background." },

  // --- QUESTION SET 2: ACADEMIC DOCUMENT ---
  { id:"W09", marks:2, topic:"Footnotes & Endnotes",
    desc:"Open a document with at least 3 paragraphs. In paragraph 1, place your cursor after a fact and insert a <strong>Footnote</strong> (References → Insert Footnote). Type a source reference at the bottom of the page. In paragraph 3, insert an <strong>Endnote</strong> (References → Insert Endnote). Type a reference at the end of the document. Confirm footnote appears on page bottom and endnote at document end." },

  { id:"W10", marks:2, topic:"Page Setup",
    desc:"Open MS Word. Go to <strong>Layout → Page Setup</strong>. Set Margins to <em>Narrow</em>. Change Orientation to <em>Landscape</em>. Set Paper Size to <em>A4</em>. Then open the <strong>full Page Setup dialog (↘ arrow)</strong> and confirm all three settings are correct. Create a second section in the same document using <strong>Layout → Breaks → Section Break (Next Page)</strong> and change only that section back to <em>Portrait</em> orientation." },

  { id:"W11", marks:2, topic:"Header & Footer",
    desc:"In a Word document of at least 3 pages, go to <strong>Insert → Header</strong> and choose a style. Type the document title on the LEFT side of the header. Then go to <strong>Insert → Footer</strong> and add: your Roll Number on the left, today's date in the center (Insert → Date & Time), and an automatic page number on the right (Insert → Page Number → Current Position). Close Header & Footer and verify on all pages." },

  { id:"W12", marks:2, topic:"Watermark & Page Color",
    desc:"Open a multi-page Word document. Go to <strong>Design → Watermark</strong> and choose <em>CONFIDENTIAL</em>. Verify it appears on all pages. Then go to <strong>Design → Page Color</strong> and set the background to a light blue. Next, apply a <strong>Page Border</strong> (Design → Page Borders) using a double-line style. Confirm the watermark, background color, and border all appear together on every page." },

  { id:"W13", marks:3, topic:"CV / Resume",
    desc:"Create a professional CV in MS Word using the correct structure: <strong>Personal Information</strong> (name, phone, email, city), <strong>Education</strong> (reverse chronological), <strong>Work Experience</strong> (with action verbs), <strong>Skills</strong> (technical and soft), and <strong>References</strong>. Format using <em>Calibri 11pt</em>. Apply <strong>Bold Heading 1</strong> to each section title. Keep it to 2 pages maximum. Save as PDF using <em>File → Save As → PDF</em>." },

  { id:"W14", marks:2, topic:"Find & Replace",
    desc:"Open a document with at least 200 words. Press <strong>Ctrl+H</strong> to open Find & Replace. Replace the word <em>'computer'</em> (lowercase) with <em>'Computer'</em> (capital C) — click Replace All. Then use <strong>Find (Ctrl+F)</strong> to search for the word <em>'data'</em> and manually check each instance. Record how many replacements were made and how many times 'data' appears in the document." },

  { id:"W15", marks:2, topic:"Shapes & Flowchart",
    desc:"In MS Word, go to <strong>Insert → Shapes</strong> and create a simple flowchart showing the computer boot process. Use: an <strong>Oval</strong> for START, <strong>Rectangles</strong> for each step (Power Button → BIOS → POST → OS Loads → Desktop), and <strong>Arrows</strong> to connect them. Right-click each shape to add text inside it. Group all shapes using <strong>Ctrl+Click all → Right-click → Group</strong>." },

  { id:"W16", marks:2, topic:"Section Break & Columns",
    desc:"In a Word document, type an introduction paragraph. Insert a <strong>Section Break (Next Page)</strong> using Layout → Breaks. In the new section, go to <strong>Layout → Columns → Two</strong> to format that section in two columns. Type 3 paragraphs in this section — they should flow in two-column layout. After the two-column section, insert another <strong>Continuous Section Break</strong> and return to single-column format." },

  { id:"W17", marks:2, topic:"Styles & Formatting",
    desc:"Open a document with at least 4 headings. Apply <strong>Heading 1</strong> (Home → Styles) to main headings and <strong>Heading 2</strong> to sub-headings. Change the body text to <strong>Times New Roman, Size 12, Justified (Ctrl+J)</strong>. Set <strong>Line Spacing to 1.5</strong> (Home → Paragraph → Line Spacing). Apply <strong>First Line Indent of 1 cm</strong> to all body paragraphs (Home → Paragraph → Indentation → First Line)." },

  { id:"W18", marks:3, topic:"Table of Contents + Page Break",
    desc:"Build a complete structured document: 1) Apply <strong>Heading 1 & 2</strong> styles to all section titles. 2) Insert a <strong>Table of Contents</strong> (References → Automatic Table 1) at the beginning. 3) Insert a <strong>Page Break (Ctrl+Enter)</strong> before each major section so every section starts on a fresh page. 4) Add <strong>Page Numbers</strong> (Insert → Page Number → Bottom of Page → Center). 5) Update the TOC — right-click → Update Entire Table." },

  // --- QUESTION SET 3: CREATIVE DOCUMENT ---
  { id:"W19", marks:2, topic:"Page Break & Section Break",
    desc:"Create a document with 4 sections. Insert a <strong>Page Break (Ctrl+Enter)</strong> between sections 1 and 2. Insert a <strong>Next Page Section Break</strong> (Layout → Breaks) between sections 2 and 3. Change section 3 to <strong>Landscape orientation</strong> while keeping all others Portrait. Insert a <strong>Continuous Section Break</strong> between sections 3 and 4. Verify each section has the correct formatting by checking Layout settings." },

  { id:"W20", marks:2, topic:"Track Changes Advanced",
    desc:"Open a document shared between two 'users'. Enable <strong>Track Changes (Ctrl+Shift+E)</strong>. Make at least 3 edits. Add 3 comments using <strong>Review → New Comment</strong> with suggestions. Add a <strong>Reply</strong> to one of your own comments. Change the username (File → Options → General → User Name) and make 2 more edits under the new username. View the markup to confirm both usernames appear in the tracked changes." },

  { id:"W21", marks:2, topic:"Citations MLA Style",
    desc:"Change your MS Word citation style to <strong>MLA</strong> (References → Style → MLA Seventh Edition). Add 4 new sources: 2 books, 1 website, and 1 journal article. Insert in-text citations for each source in the document. Create a <strong>Works Cited</strong> page using References → Bibliography → Works Cited. Press <strong>F9</strong> to update all fields. Verify the MLA format: Author. Title. Publisher, Year." },

  { id:"W22", marks:2, topic:"Shapes & Text Box",
    desc:"Create a one-page infographic in Word about computer hardware. Use at least 4 different <strong>Shapes</strong> (Insert → Shapes) with text inside them representing hardware components. Add 3 <strong>Text Boxes</strong> (Insert → Text Box → Draw Text Box) with descriptions. Apply <strong>Format Shape</strong> (right-click) to add fill colors, border styles, and shadow effects. <strong>Group</strong> all elements (Ctrl+A → Right-click → Group) so the infographic moves as one unit." },

  { id:"W23", marks:2, topic:"Macro + AutoText Combined",
    desc:"In MS Word: 1) Record a <strong>Macro</strong> named <em>HeadingFormat</em> that applies: Bold, size 14, Dark Red color, and Left Align. Assign shortcut <strong>Ctrl+Shift+H</strong>. Test it on 3 different headings. 2) Save the text block <em>'Prepared by: [Your Name] | Class: Grade 10 | Date: [Today's Date]'</em> as an <strong>AutoText</strong> entry named <em>DocFooter</em>. Insert it using F3 at the bottom of the document." },

  { id:"W24", marks:3, topic:"Full Document Build",
    desc:"Create a complete, professional 4-page document titled <em>'Computer Hardware Guide'</em> that includes: a <strong>Cover Page</strong> (Insert → Cover Page), a <strong>Table of Contents</strong>, at least 3 sections with <strong>Heading 1 & 2</strong> styles, a <strong>Header</strong> (title left, page number right), a <strong>Footer</strong> (your name and date), a <strong>Watermark</strong> (DRAFT), a <strong>Table</strong> comparing hardware components, at least one <strong>Footnote</strong>, and a <strong>Bibliography</strong> with 3 sources in APA style." },

];

// ============================================================
// EXCEL TASK BANK — Multiple question sets with full data
// ============================================================

const EXCEL_TASK_BANK = [

  // --- QUESTION SET 1: STUDENT RESULTS ---
  { id:"E01", marks:2, topic:"VLOOKUP",
    desc:"Create a table on Sheet1 with columns: <strong>ID (A), Name (B), Subject (C), Marks (D)</strong>. Add 8 rows of data with IDs 101–108. On Sheet2, create a lookup area. In cell B2 of Sheet2, write a <strong>VLOOKUP</strong> formula to find a student's Name using their ID: <code>=VLOOKUP(A2, Sheet1!$A$2:$D$9, 2, FALSE)</code>. In B3, get their Marks. Use <strong>IFERROR</strong> to display <em>'Not Found'</em> if ID does not exist." },

  { id:"E02", marks:3, topic:"HLOOKUP",
    desc:"Create a horizontal data table in Row 1: <strong>Jan, Feb, Mar, Apr, May</strong> as headers. Row 2: Sales figures. Row 3: Profit figures. Row 4: Expenses. In a separate area, use <strong>HLOOKUP</strong> to find March Sales: <code>=HLOOKUP('Mar', A1:F4, 2, FALSE)</code>. Write 3 more HLOOKUP formulas to retrieve different Month + Row combinations. Format all monetary values as <strong>Currency (PKR)</strong>." },

  { id:"E03", marks:3, topic:"INDEX & MATCH",
    desc:"Build a student table: Name (A), City (B), Score (C), Grade (D) — 10 rows. Write an <strong>INDEX+MATCH</strong> formula to find a student's Score by name: <code>=INDEX(C2:C11, MATCH('Ali', A2:A11, 0))</code>. Write a second formula using INDEX+MATCH to look LEFT (find Name by Score). In a comments cell, write one key difference between INDEX+MATCH and VLOOKUP. Apply <strong>Conditional Formatting</strong> to highlight top 3 scores in green." },

  { id:"E04", marks:2, topic:"COUNTIF / SUMIF / AVERAGEIF",
    desc:"Create a sales table: <strong>Salesperson (A), Region (B), Sales_Amount (C), Month (D)</strong> — 15 rows with 3 regions (North, South, East) and 3 salespersons. Write: 1) <code>=COUNTIF(B2:B16,'North')</code> — count North region entries. 2) <code>=SUMIF(B2:B16,'South',C2:C16)</code> — total South sales. 3) <code>=AVERAGEIF(D2:D16,'January',C2:C16)</code> — average January sales. Label all results clearly." },

  { id:"E05", marks:2, topic:"Nested IF / IFS",
    desc:"Create a student marks table with 8 students and their Average score. In a <strong>Grade column</strong>, write a <strong>Nested IF</strong>: <code>=IF(G2>=90,'A+',IF(G2>=80,'A',IF(G2>=70,'B',IF(G2>=60,'C',IF(G2>=50,'D','F')))))</code>. In a <strong>Status column</strong>, use the <strong>IFS function</strong>: <code>=IFS(G2>=70,'Pass with Merit',G2>=50,'Pass',TRUE,'Fail')</code>. Drag both formulas down for all 8 students." },

  { id:"E06", marks:2, topic:"Advanced Data Validation",
    desc:"Create a student entry form. Set up <strong>Data Validation</strong> on: 1) Marks column — Allow: Whole Number, between 0 and 100. Set a <strong>Stop alert</strong> with title <em>'Invalid Marks'</em> and message <em>'Enter a number between 0 and 100'</em>. 2) Grade column — Allow: List, Source: A+, A, B, C, D, F. 3) Section column — Allow: Custom formula: <code>=LEN(A2)>=3</code> (minimum 3 characters). Test all three validations with invalid entries." },

  { id:"E07", marks:3, topic:"Dependent Dropdown (Cascading)",
    desc:"Build a <strong>dependent dropdown system</strong>: In Sheet2, Column A: Pakistan, USA, UK. Column C: Lahore, Karachi, Islamabad (for Pakistan). Column E: New York, Chicago, Houston (for USA). Column G: London, Manchester, Birmingham (for UK). <strong>Name each range</strong> (select range → Name Box → type Pakistan → Enter, repeat for others). On Sheet1: Cell A1 gets a dropdown of countries (Data Validation → List → =Sheet2!$A$1:$A$3). Cell B1 uses: <code>=INDIRECT(A1)</code> as the dependent dropdown source." },

  { id:"E08", marks:2, topic:"Pivot Table",
    desc:"Create a dataset with columns: <strong>Student Name, Subject, Term, Marks</strong> — at least 20 rows (5 students × 4 subjects × 1 term). Go to <strong>Insert → PivotTable → New Worksheet</strong>. Build a Pivot Table showing: <strong>Rows = Student Name, Columns = Subject, Values = Sum of Marks</strong>. Then add a second Pivot Table showing <strong>Average Marks per Subject</strong>. Apply a <strong>PivotTable Style</strong> from the Design tab." },

  // --- QUESTION SET 2: BUDGET TRACKER ---
  { id:"E09", marks:2, topic:"Budget Tracker",
    desc:"Build a Budget Tracker with columns: <strong>Date (A), Description (B), Category (C), Income (D), Expense (E), Balance (F)</strong>. Enter 10 rows of data. In F2: <code>=D2-E2</code>. In F3 onwards use running balance: <code>=F2+D3-E3</code>. At the bottom: Total Income <code>=SUM(D2:D11)</code>, Total Expenses <code>=SUM(E2:E11)</code>, Net Balance <code>=SUM(D2:D11)-SUM(E2:E11)</code>. Add a column G: <code>=IF(E2>D2,'Over Budget!','')</code>." },

  { id:"E10", marks:2, topic:"Conditional Formatting",
    desc:"In your Budget Tracker or student marks sheet, apply <strong>3 different Conditional Formatting rules</strong>: 1) Expense column — highlight cells > 1000 in <strong>Red fill with dark red text</strong> (Home → Conditional Formatting → Highlight Cell Rules → Greater Than). 2) Balance column — highlight negative values in <strong>Orange</strong>. 3) Marks column — use <strong>Top/Bottom Rules → Top 3 Items</strong> with Gold/Yellow highlight. Verify all 3 rules appear in Manage Rules." },

  { id:"E11", marks:2, topic:"Protect Sheet + Data Validation",
    desc:"Create a student report card template. Lock all formula cells: select formula cells → <strong>Home → Format → Format Cells → Protection → check Locked</strong>. Select data-entry cells (marks columns) → <strong>uncheck Locked</strong>. Then go to <strong>Review → Protect Sheet</strong> with password <em>Class2026</em>. Check: 'Select locked cells' and 'Select unlocked cells' only. Verify formulas cannot be changed but marks can be entered." },

  { id:"E12", marks:2, topic:"Text to Columns",
    desc:"On a new sheet, create a column of full names with city: e.g., <em>'Ali Hassan - Lahore'</em>, <em>'Sara Khan - Karachi'</em> (10 entries with dashes). Select the column. Go to <strong>Data → Text to Columns → Delimited → check Other → enter: -</strong>. Click Finish to split into separate Name and City columns. Trim extra spaces using <code>=TRIM(A2)</code>. Then do a second task: split comma-separated subject marks into individual cells." },

  { id:"E13", marks:2, topic:"HLOOKUP + VLOOKUP Combined",
    desc:"Create a <strong>multi-row grade lookup table</strong>: Row 1 (horizontal): Student IDs as headers. Row 2: Marks. Row 3: Grade. Also create a <strong>vertical ID-to-Name table</strong> on the same sheet. Write one formula using <strong>HLOOKUP</strong> to find a student's grade by ID. Write another using <strong>VLOOKUP</strong> to find their name by ID. In a summary cell, combine them: <code>='Student: '&VLOOKUP(...)&' | Grade: '&HLOOKUP(...)</code>" },

  { id:"E14", marks:3, topic:"Report Card Full Build",
    desc:"Build a complete Student Report Card with 8 students and 5 subjects. Include: <strong>SUM formula</strong> for Total, <strong>AVERAGE</strong> for avg, <strong>Nested IF</strong> for Grade (A+/A/B/C/F), <strong>RANK function</strong> <code>=RANK(G2,$G$2:$G$9,0)</code> for class position, <strong>COUNTIF</strong> to count how many students got each grade, <strong>MAX/MIN</strong> for class best/lowest, <strong>Conditional Formatting</strong> (green ≥80, red <50), <strong>Merge & Center</strong> title, <strong>Freeze Row 1</strong>, and <strong>Protect Sheet</strong> with password." },

  { id:"E15", marks:2, topic:"AND / OR with IF",
    desc:"Create a table: Student Name (A), Math (B), English (C), Science (D), IT (E). Enter data for 8 students. Add column F: <strong>Merit Award</strong> using AND: <code>=IF(AND(B2>80,C2>80,D2>80,E2>80),'Full Merit','No')</code>. Add column G: <strong>Any Excellence</strong> using OR: <code>=IF(OR(B2>95,C2>95,D2>95,E2>95),'Outstanding in One!','')</code>. Add column H: <strong>Combined</strong>: <code>=IF(AND(B2+C2+D2+E2>320,OR(B2>90,E2>90)),'Merit Scholar','Standard')</code>." },

  { id:"E16", marks:2, topic:"INDEX & MATCH Advanced",
    desc:"Create a 10×5 dataset. Use <strong>INDEX+MATCH to look LEFT</strong> (finding Name based on Score — which VLOOKUP cannot do): <code>=INDEX(A2:A11, MATCH(MAX(C2:C11), C2:C11, 0))</code> to find the top scorer's name. Write a second formula to find the student with the MINIMUM score. Write a third formula: <code>=INDEX(B2:B11, MATCH('Target Name', A2:A11, 0))</code>. Compare these to equivalent VLOOKUP attempts and note any limitations." },

  // --- QUESTION SET 3: ADVANCED FUNCTIONS ---
  { id:"E17", marks:2, topic:"Advanced COUNTIF / SUMIF",
    desc:"Create a dataset: Subject (A), Student (B), Score (C), Pass/Fail (D) — 20 rows. Write: 1) <code>=COUNTIF(D2:D21,'Pass')</code> — total passes. 2) <code>=COUNTIF(C2:C21,'>='&80)</code> — students scoring 80+. 3) <code>=SUMIF(A2:A21,'Math',C2:C21)</code> — total Math scores. 4) <code>=AVERAGEIF(A2:A21,'Science',C2:C21)</code> — avg Science score. 5) Build a summary table using these functions to show Pass/Fail count and average score per subject." },

  { id:"E18", marks:2, topic:"Cascading Dropdown Validation",
    desc:"Create a school timetable entry form. Build a <strong>3-level dependent dropdown</strong>: Grade (6th/7th/8th) → Section (A/B/C) → Subject (Math/English/Science/IT/Urdu). Name each range appropriately. Use <strong>INDIRECT</strong> for each dependent dropdown. Add Data Validation with a <strong>Warning alert</strong> (not Stop) on the marks entry column allowing values 0–100. Test by selecting different grades and verifying the section dropdown updates correctly." },

  { id:"E19", marks:3, topic:"Pivot Table + Chart",
    desc:"Create a sales dataset: Salesperson (A), Product (B), Region (C), Quarter (D), Revenue (E) — 25 rows minimum. Build a <strong>Pivot Table</strong> (Insert → PivotTable): Rows = Salesperson, Columns = Quarter, Values = Sum of Revenue. Add a second Pivot Table: Rows = Region, Values = Count of Salesperson AND Sum of Revenue. From the first Pivot Table, insert a <strong>Pivot Chart (Column type)</strong>. Customize: add chart title, axis labels, and change chart style." },

  { id:"E20", marks:2, topic:"IFS + VLOOKUP Combined",
    desc:"Create a product catalog: Product ID (A), Product Name (B), Category (C), Price (D) — 12 rows. On a separate lookup sheet, write a <strong>VLOOKUP</strong> to retrieve product name and price by ID. Then write an <strong>IFS formula</strong> based on Price: <code>=IFS(D2>5000,'Premium',D2>2000,'Mid-Range',D2>500,'Budget',TRUE,'Economy')</code>. Use <strong>IFERROR</strong> around the VLOOKUP: <code>=IFERROR(VLOOKUP(A2,...),'Product Not Found')</code>." },

  { id:"E21", marks:2, topic:"Text to Columns + Remove Duplicates",
    desc:"Sheet 1: Paste a list of 20 student entries as: <em>'Ali Hassan, Lahore, Grade A'</em> (comma separated, all in column A). Use <strong>Data → Text to Columns → Delimited → Comma</strong> to split into 3 columns. Sheet 2: Copy only the Names column and manually duplicate 5 entries. Use <strong>Data → Remove Duplicates</strong> to clean the list. Excel should report exactly how many duplicates were removed. Trim the data using <code>=TRIM(A2)</code> in an adjacent column." },

  { id:"E22", marks:2, topic:"Budget Tracker Advanced",
    desc:"Extend the Budget Tracker: Add a <strong>Category dropdown</strong> (Data Validation → List: Food, Transport, Education, Entertainment, Other). Add a Summary Sheet with: <code>=SUMIF(Category_Range, 'Food', Expense_Range)</code> for each category. Create a <strong>Pie Chart</strong> from the category totals showing expense distribution. Apply <strong>Conditional Formatting</strong> — highlight the highest expense category row in orange. Add a <strong>Sparkline</strong> (Insert → Sparklines → Line) to show expense trend." },

  { id:"E23", marks:3, topic:"Full Excel Project",
    desc:"Build a complete <strong>School Finance Tracker</strong>: Sheet 1 (Fees): Student Name, Class, Fee Amount, Paid (Yes/No), Date. Sheet 2 (Summary): Use <code>=COUNTIF</code> for total paid/unpaid, <code>=SUMIF</code> for total collected, <code>=AVERAGEIF</code> for average paid. Add: VLOOKUP to check a student's payment status by name, Conditional Formatting (Paid=Green, Unpaid=Red), a Column Chart of fees collected per class, Freeze Row 1, Protect Sheet (password: Finance2026), and a dependent dropdown for Class → Section." },

  { id:"E24", marks:2, topic:"HLOOKUP Practical",
    desc:"Create a <strong>quarterly sales report</strong> in horizontal format. Row 1: headers — Product, Q1, Q2, Q3, Q4. Rows 2–6: five products with quarterly sales figures. Use <strong>HLOOKUP</strong> to: 1) Find Q3 sales for a specific product. 2) Find Q1 profit (Row 3) for any quarter. 3) Find the Quarter with maximum sales using: <code>=INDEX(B1:E1, MATCH(MAX(B2:E2), B2:E2, 0))</code>. Format all figures as Currency and create a <strong>Line Chart</strong> showing quarterly trends for all 5 products." },

];

// ============================================================
// POWERPOINT TASK BANK
// ============================================================

const PPT_TASK_BANK = [

  // --- QUESTION SET 1: SLIDE MASTER ---
  { id:"P01", marks:3, topic:"Slide Master",
    desc:"Open a new PowerPoint. Go to <strong>View → Slide Master</strong>. Click the <strong>Master Slide (top, largest)</strong>. Set a background color of Dark Blue. Change all fonts: Title font → <strong>Arial Black</strong>, Body font → <strong>Calibri</strong>. Insert your school logo or name as a text box in the bottom-left corner — it must appear on ALL slides. Set the <strong>Color Theme</strong> (Slide Master tab → Colors) to a custom theme with 3 complementary colors. Add 5 content slides and verify the design is consistent." },

  { id:"P02", marks:2, topic:"Slide Master Layouts",
    desc:"In Slide Master view, click the <strong>Title and Content layout</strong> (second slide in the left panel). Change only this layout's font to <strong>Georgia</strong> for titles. In the <strong>Blank layout</strong>, insert a diagonal watermark text box saying <em>'IT CLASS 2026'</em> in light grey. Close Master View. Create 6 slides: 2 using Title and Content layout, 2 using the Blank layout, and 2 using the Two Content layout. Verify each layout shows its unique customization." },

  { id:"P03", marks:2, topic:"Animations",
    desc:"Create a 5-slide presentation about Computer Hardware. On Slide 2, add 4 bullet points. Animate each bullet point using <strong>Animations → Fly In (From Left)</strong>. Set the first bullet to <strong>On Click</strong>, the rest to <strong>After Previous</strong>. Open the <strong>Animation Pane (View → Animation Pane)</strong> and reorder animations. Set Duration to 0.5s for each. On Slide 3, animate an image using <strong>Fade</strong> (Entrance) and <strong>Spin</strong> (Emphasis) — both triggered On Click." },

  { id:"P04", marks:2, topic:"Transitions",
    desc:"Create an 8-slide presentation. Apply the <strong>Fade</strong> transition to all slides (Transitions → Fade → Apply to All). Then change Slide 3 to <strong>Morph</strong> transition — duplicate Slide 2, move one object on the copy, and the Morph transition will animate the movement. Set <strong>Transition Duration</strong> to 1 second for Morph. Use <strong>Slide Show → Rehearse Timings</strong> to set automatic timings. The total presentation should run in under 2 minutes." },

  { id:"P05", marks:3, topic:"Charts & SmartArt",
    desc:"Create a slide with a <strong>Column Chart</strong> (Insert → Chart → Column) showing 5 students' marks in 3 subjects. Customize: add Chart Title <em>'Student Performance Q1'</em>, add X and Y Axis Labels, change chart style (Chart Design → Chart Styles), change one bar color. On a new slide, insert <strong>SmartArt → Process → Basic Chevron Process</strong> with 5 steps showing the Mail Merge process. On a third slide, insert a <strong>Pie Chart</strong> showing software types distribution." },

  { id:"P06", marks:2, topic:"Professional Design",
    desc:"Apply the <strong>6×6 Rule</strong> to redesign a slide that has too much text (given by teacher). Each bullet should have max 6 words. Use 2-3 colors maximum. Apply <strong>high-contrast</strong> (dark text on light background OR white text on dark background). Use <strong>Align tools</strong> (Picture Format or Drawing Tools → Align → Align Left/Center) to neatly align all elements. Add <strong>one image</strong> per content slide. Export the final presentation as <strong>PDF</strong>: File → Export → Create PDF/XPS." },

  // --- QUESTION SET 2: FULL PRESENTATIONS ---
  { id:"P07", marks:3, topic:"Full Presentation — Hardware",
    desc:"Create a <strong>7-slide IT Hardware presentation</strong> using Slide Master for consistent design. Slides: 1) Title Slide — 'Computer Hardware Guide'. 2) CPU. 3) RAM & Storage. 4) Motherboard. 5) GPU. 6) PSU. 7) Thank You. Requirements: Slide Master with school logo + consistent font/color. Each content slide must have at least 1 image + 3 bullet points (6×6 rule). Slide 4 must use SmartArt to show motherboard components. Include at least 2 different Entrance animations. Apply Fade transition to all." },

  { id:"P08", marks:2, topic:"Tables in PowerPoint",
    desc:"On a new slide, go to <strong>Insert → Table → 5 columns × 6 rows</strong>. In the table, compare: Hardware, Type, Speed, Size, and Example for 5 different memory types (Registers, Cache, RAM, ROM, HDD). Format the table: apply a <strong>Table Style</strong> (Table Design tab), make the header row <strong>Bold with Dark background and White text</strong>, set cell <strong>Text Alignment to Center</strong>, and resize column widths to fit content. The table must be readable and professional." },

  { id:"P09", marks:2, topic:"Animations + Timing",
    desc:"Create a 4-slide presentation about Cybersecurity. On Slide 2, list 5 cyber threats as bullet points. Animate them: Bullets 1–3 should appear <strong>On Click</strong> with <strong>Wipe from Left</strong>. Bullet 4 should appear <strong>With Previous</strong> (same click as 3) with <strong>Fade</strong>. Bullet 5 should appear <strong>After Previous</strong> with a 1-second Delay. Open the <strong>Animation Pane</strong> and verify the correct sequence. Add a <strong>Spin (Emphasis)</strong> animation to the slide title triggered After Previous." },

  { id:"P10", marks:2, topic:"Slide Master + Design Rules",
    desc:"Using Slide Master, build a <strong>professional brand template</strong>: Choose a 3-color palette (1 dominant, 1 supporting, 1 accent). Set a San-Serif font pair (Heading: Calibri, Body: Calibri Light). Insert a footer text on the Master that shows the class name and date. Create 2 custom layouts: one with a <strong>full-image background placeholder</strong> and one with a <strong>Two-Column layout</strong>. Close Master View. Build 6 slides — 3 using each custom layout. No two slides should have the same visual appearance." },

  { id:"P11", marks:3, topic:"SmartArt + Chart + Table",
    desc:"Create a presentation about Programming Languages with these slides: 1) <strong>Title Slide</strong>. 2) SmartArt: <strong>Hierarchy</strong> layout showing Software → System Software / Application Software / Utility Software with 2 examples each. 3) <strong>Table</strong> comparing Python, Java, and C++ across 5 criteria. 4) <strong>Bar Chart</strong> showing estimated popularity (Python 30%, Java 20%, JavaScript 25%, C++ 15%, Others 10%). 5) SmartArt: <strong>Process</strong> showing how a Compiler works (Write Code → Compile → .exe → Run). Apply consistent Slide Master design throughout." },

  { id:"P12", marks:2, topic:"Animations Advanced",
    desc:"Create a slide with a <strong>SmartArt Process diagram</strong> (5 steps). Animate it using <strong>Animations → Add Animation → Fly In</strong>. In the Animation Pane, set each step to appear <strong>After Previous</strong> with 0.5s delay. Add a <strong>text box</strong> that appears using <strong>Zoom (Entrance)</strong> On Click after all steps have loaded. Then add an <strong>Exit animation (Fade Out)</strong> to the SmartArt after the text box appears. Use <strong>Slide Show → From Beginning</strong> to test the complete animation sequence." },

  { id:"P13", marks:2, topic:"Google Search Infographic",
    desc:"Create a <strong>3-slide visual explainer</strong> of how Google Search works using PowerPoint. Slide 1: Title — <em>'How Google Works'</em>. Slide 2: Use <strong>SmartArt → Process</strong> to show the 3 stages: Crawling → Indexing → Ranking. Add descriptions in text boxes below each step. Slide 3: A <strong>table</strong> showing 6 Google Search tricks: Exact Phrase, site:, filetype:, *, -, OR operators with examples. Apply <strong>Morph transition</strong> between slides. Export as PDF." },

  { id:"P14", marks:3, topic:"Full Cybersecurity Presentation",
    desc:"Build a complete <strong>6-slide Cybersecurity Awareness presentation</strong>: 1) Title Slide with Slide Master applied. 2) Types of Threats — use SmartArt (Cycle or List) with 6 threats. 3) How Viruses Spread — Column Chart showing relative frequency of each spread method. 4) Strong Password Rules — text slide following 6×6 rule with checklist formatting. 5) Antivirus Protection — Table comparing 4 antivirus methods (Signature, Heuristic, Sandbox, Real-Time) across 3 criteria. 6) Summary / Thank You. Include: consistent Slide Master, transitions, at least 2 animations per slide, exported as PDF." },

  { id:"P15", marks:2, topic:"AI Basics Visual Presentation",
    desc:"Create a <strong>5-slide AI Basics presentation</strong>: 1) Title. 2) What is AI? — Insert SmartArt <strong>Cycle</strong> showing Input → Process → Output → Feedback. 3) Real-Life AI Examples — Table: AI Tool | Company | How It Works | Example Use (4 rows: Siri, ChatGPT, Google Assistant, Netflix Recommendations). 4) Chart — Bar chart showing AI adoption across industries (Education 40%, Healthcare 60%, Finance 75%, Retail 50%). 5) Future of AI — SmartArt Hierarchy. Apply custom Slide Master with tech-themed colors (dark navy + cyan accent)." },

];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuestion(q) {
  const correctText = q.opts[q.ans];
  const shuffled = shuffleArray(q.opts);
  return {
    ...q,
    opts: shuffled,
    ans: shuffled.indexOf(correctText)
  };
}

function buildExamQuestions(softwareCount, hardwareCount, wordCount, excelCount, pptCount) {
  const sw   = shuffleArray(QUESTION_BANK.filter(q => q.section === "Software")).slice(0, softwareCount);
  const hw   = shuffleArray(QUESTION_BANK.filter(q => q.section === "Hardware")).slice(0, hardwareCount);
  const word = shuffleArray(QUESTION_BANK.filter(q => q.section === "MS Word")).slice(0, wordCount);
  const xl   = shuffleArray(QUESTION_BANK.filter(q => q.section === "MS Excel")).slice(0, excelCount);
  const ppt  = shuffleArray(QUESTION_BANK.filter(q => q.section === "MS PowerPoint")).slice(0, pptCount);

  return [...sw, ...hw, ...word, ...xl, ...ppt].map(prepareQuestion);
}

function buildPracticalTasks(wordTaskCount, excelTaskCount, pptTaskCount) {
  const wordTasks  = shuffleArray(WORD_TASK_BANK).slice(0, wordTaskCount).sort((a,b)=>a.id.localeCompare(b.id));
  const excelTasks = shuffleArray(EXCEL_TASK_BANK).slice(0, excelTaskCount).sort((a,b)=>a.id.localeCompare(b.id));
  const pptTasks   = shuffleArray(PPT_TASK_BANK).slice(0, pptTaskCount).sort((a,b)=>a.id.localeCompare(b.id));

  wordTasks.forEach((t, i)  => t.num = i + 1);
  excelTasks.forEach((t, i) => t.num = i + 1);
  pptTasks.forEach((t, i)   => t.num = i + 1);
  return { wordTasks, excelTasks, pptTasks };
}

const DEFAULT_EXAM_CONFIG = {
  softwareQuestions: 10,
  hardwareQuestions: 10,
  wordQuestions:      5,
  excelQuestions:     5,
  pptQuestions:       5,
  wordTasks:          8,
  excelTasks:         8,
  pptTasks:           5,
  timeMinutes:        60
};

(function cacheBanksForTeacher(){
  try {
    localStorage.setItem('exam_question_bank_cache', JSON.stringify(
      QUESTION_BANK.map(function(q){
        return {id:q.id, section:q.section, topic:q.topic, q:q.q, opts:q.opts, ans:q.ans, diff:q.diff};
      })
    ));
    localStorage.setItem('exam_word_task_bank_cache', JSON.stringify(
      WORD_TASK_BANK.map(function(t){
        return {id:t.id, topic:t.topic, marks:t.marks, desc:t.desc};
      })
    ));
    localStorage.setItem('exam_excel_task_bank_cache', JSON.stringify(
      EXCEL_TASK_BANK.map(function(t){
        return {id:t.id, topic:t.topic, marks:t.marks, desc:t.desc};
      })
    ));
    localStorage.setItem('exam_ppt_task_bank_cache', JSON.stringify(
      PPT_TASK_BANK.map(function(t){
        return {id:t.id, topic:t.topic, marks:t.marks, desc:t.desc};
      })
    ));
  } catch(e) {}
})();
