import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fkrhlogbooyfxhqneiyb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcmhsb2dib295ZnhocW5laXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODk0OTMsImV4cCI6MjA0OTc2NTQ5M30.ORKd19RXKotx-vHuPE2BzVpXElXv0TTN1us6OZx41X4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
