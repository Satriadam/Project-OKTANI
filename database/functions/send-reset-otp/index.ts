import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { email } = await req.json();

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15); // OTP expires in 15 minutes

    // Get user_id if the user exists
    const { data: userData, error: userError } = await supabase
      .from('auth.users')
      .select('id')
      .eq('email', email)
      .single();

    if (userError) {
      throw new Error('Email tidak ditemukan');
    }

    // Store OTP in database
    const { error: insertError } = await supabase
      .from('password_resets')
      .insert({
        email,
        otp_code: otp,
        expires_at: expiresAt.toISOString(),
        user_id: userData?.id,
      });

    if (insertError) {
      throw insertError;
    }

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'OK TANI <onboarding@resend.dev>',
        to: [email],
        subject: 'Kode OTP Reset Password OK TANI',
        html: `
          <h2>Reset Password OK TANI</h2>
          <p>Berikut adalah kode OTP Anda untuk reset password:</p>
          <h1 style="font-size: 32px; letter-spacing: 5px;">${otp}</h1>
          <p>Kode OTP ini akan kadaluarsa dalam 15 menit.</p>
          <p>Jika Anda tidak meminta reset password, abaikan email ini.</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Gagal mengirim email');
    }

    return new Response(
      JSON.stringify({ message: 'OTP sent successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});