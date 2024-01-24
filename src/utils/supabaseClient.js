import 'react-native-url-polyfill/auto';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

export const supabaseUrl = 'https://orvrdahqiexwefxgjybn.supabase.co';
export const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ydnJkYWhxaWV4d2VmeGdqeWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMDE0MDQsImV4cCI6MjAyMDU3NzQwNH0.Mp6Rw6usJxfT9BSkoz1IsnKoGH_urVfq_4WkewXPy1Y';
export const supabaseClient = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
