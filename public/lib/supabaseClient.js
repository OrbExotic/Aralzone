import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://izayuejeigaqvqffscpn.supabase.co
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6YXl1ZWplaWdhcXZxZmZzY3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzA2ODQsImV4cCI6MjA2NjM0NjY4NH0.fvAATp7FWNY1OR7p3BDiNsDm4i0ZPyEzOju1bMPEwPs

export const supabase = createClient(supabaseUrl, supabaseAnonKey)