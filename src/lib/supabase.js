import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yeqdwwbnwcolulhauqqf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcWR3d2Jud2NvbHVsaGF1cXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMTgwODksImV4cCI6MjA4ODc5NDA4OX0.Kze6h1FJIxL1AF_KFSOLUP_iXmrjI7QbfdQyqehLm3U'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
