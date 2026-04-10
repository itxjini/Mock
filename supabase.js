import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL  = "https://uqhbxmlimbyvavutrriw.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxaGJ4bWxpbWJ5dmF2dXRycml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MTkzOTEsImV4cCI6MjA5MTE5NTM5MX0.mFUFtDtskP9kJIvaMk5fdGSiQ3kiSZxOmId7cFyLU1E";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

const SUBMISSIONS_TABLE = "submissions";
const CONFIG_TABLE      = "config";
const STUDENTS_TABLE    = "students";

export async function saveSubmission(data) {
  const { data: row, error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .insert([{ ...data, submitted_at: new Date().toISOString() }])
    .select("id")
    .single();
  if (error) throw new Error(error.message);
  return String(row.id);
}

export async function getSubmissions() {
  const { data, error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .select("*")
    .order("submitted_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data || []).map(row => ({ ...row, _id: String(row.id) }));
}

export function listenSubmissions(callback) {
  getSubmissions().then(callback).catch(console.error);

  const channel = supabase
    .channel("submissions-changes")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: SUBMISSIONS_TABLE },
      () => getSubmissions().then(callback).catch(console.error)
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}

export async function updateSubmission(id, data) {
  const { error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .update(data)
    .eq("id", id);
  if (error) throw new Error(error.message);
}
export async function clearSubmissions() {
  // Supabase requires a WHERE clause — use a true condition to delete all
  const { error } = await supabase
    .from(SUBMISSIONS_TABLE)
    .delete()
    .neq("id", -1);          // -1 never matches, so all rows are deleted
  if (error) throw new Error(error.message);
}

export async function saveExamConfig(config) {
  const { error } = await supabase
    .from(CONFIG_TABLE)
    .upsert({ key: "examConfig", value: config }, { onConflict: "key" });
  if (error) throw new Error(error.message);
}

export async function loadExamConfig() {
  const { data, error } = await supabase
    .from(CONFIG_TABLE)
    .select("value")
    .eq("key", "examConfig")
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data ? data.value : null;
}

export function listenExamConfig(callback) {
  loadExamConfig().then(callback).catch(console.error);

  const channel = supabase
    .channel("config-changes")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: CONFIG_TABLE, filter: "key=eq.examConfig" },
      (payload) => {
        const val = payload.new ? payload.new.value : null;
        callback(val);
      }
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}

const DEFAULT_STUDENTS = ["Zain", "Laraib", "Hassan"];
export async function saveAllowedStudents(list) {
  const { error } = await supabase
    .from(STUDENTS_TABLE)
    .upsert({ key: "allowedStudents", names: list }, { onConflict: "key" });
  if (error) throw new Error(error.message);
}

export async function loadAllowedStudents() {
  const { data, error } = await supabase
    .from(STUDENTS_TABLE)
    .select("names")
    .eq("key", "allowedStudents")
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data ? (data.names || DEFAULT_STUDENTS) : DEFAULT_STUDENTS;
}

export function listenAllowedStudents(callback) {
  loadAllowedStudents().then(callback).catch(console.error);

  const channel = supabase
    .channel("students-changes")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: STUDENTS_TABLE, filter: "key=eq.allowedStudents" },
      (payload) => {
        const names = payload.new ? (payload.new.names || DEFAULT_STUDENTS) : DEFAULT_STUDENTS;
        callback(names);
      }
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}
