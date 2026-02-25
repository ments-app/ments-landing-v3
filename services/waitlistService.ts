import { supabase } from '@/lib/supabaseClient';
import { WaitlistEntry, WaitlistResponse } from '@/types/waitlist';

export const waitlistService = {
  async addWaitlistEntry(entry: Omit<WaitlistEntry, 'id' | 'created_at' | 'status' | 'updated_at'>): Promise<WaitlistResponse> {
    try {
      console.log('Submitting to Supabase:', {
        table: 'waitlist',
        email: entry.email,
        name: entry.name
      });

      // First, check if email already exists
      const { data: existingEntry } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', entry.email)
        .maybeSingle();

      if (existingEntry) {
        // Update existing entry
        const { data, error } = await supabase
          .from('waitlist')
          .update({
            name: entry.name,
            phone: entry.phone || undefined,
            interest: entry.interest || undefined,
            message: entry.message || undefined,
            status: 'pending',
            updated_at: new Date().toISOString()
          })
          .eq('email', entry.email)
          .select()
          .single<WaitlistEntry>();

        if (error) {
          // Update failed (likely RLS), but email already exists — treat as duplicate
          return { data: null, error: null, isDuplicate: true };
        }

        return {
          data,
          error: null,
          isDuplicate: true
        };
      } else {
        // Insert new entry
        const { data, error } = await supabase
          .from('waitlist')
          .insert([{ ...entry, status: 'pending' }])
          .select()
          .single<WaitlistEntry>();

        if (error) throw error;
        
        return { data, error: null, isDuplicate: false };
      }
    } catch (error: unknown) {
      // Stringify the entire error to catch duplicate/unique constraint in any form
      const errorStr = JSON.stringify(error, Object.getOwnPropertyNames(error && typeof error === 'object' ? error : {})).toLowerCase();
      const errorMsg = error instanceof Error ? error.message.toLowerCase() : '';
      const errorCode = (error && typeof error === 'object' && 'code' in error) ? String((error as Record<string, unknown>).code) : '';

      const isDuplicate = errorCode === '23505'
        || errorStr.includes('unique')
        || errorStr.includes('duplicate')
        || errorStr.includes('23505')
        || errorMsg.includes('unique')
        || errorMsg.includes('duplicate');

      if (isDuplicate) {
        console.log('Duplicate email detected:', entry.email);
        return { data: null, error: null, isDuplicate: true };
      }

      console.error('Waitlist Service Error:', error);

      return {
        data: null,
        error: new Error(
          error instanceof Error ? error.message : 'Failed to add to waitlist',
          { cause: error }
        ),
        isDuplicate: false
      };
    }
  },

  async getWaitlist() {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching waitlist:', error);
      throw error;
    }
  }
};
