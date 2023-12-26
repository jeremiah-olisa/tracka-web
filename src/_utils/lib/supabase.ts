import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jaalpvmewopvczojgpct.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY ??
    (() => { throw new Error('Supabase Key is required'); })();

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;