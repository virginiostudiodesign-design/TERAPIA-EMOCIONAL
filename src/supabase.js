import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
'https://vfsasihccyezusqitdeq.supabase.co'

const supabaseKey =
'sb_publishable_oFjqUtsVASnyHfCFErSdVw_Dh3NTavA'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
