// Cloudflare Worker: handles POST /api/enquiry and serves everything else from static assets.
const FIELDS = ['name', 'email', 'country', 'phone', 'dates', 'duration', 'travellers', 'style', 'accommodation', 'journey', 'message'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/enquiry') {
      if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405);

      let form;
      try { form = await request.formData(); } catch { return json({ ok: false, error: 'Invalid form' }, 400); }

      // Honeypot field: bots fill it, people never see it.
      if (form.get('website')) return json({ ok: true });

      const data = {};
      for (const k of FIELDS) data[k] = String(form.get(k) ?? '').trim().slice(0, 4000);

      if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return json({ ok: false, error: 'Please share your name and a valid email address.' }, 422);
      }

      const enquiry = { ...data, receivedAt: new Date().toISOString() };

      if (env.ENQUIRY_WEBHOOK_URL) {
        const res = await fetch(env.ENQUIRY_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(enquiry),
        });
        if (!res.ok) return json({ ok: false, error: 'We could not send your enquiry. Please email us directly.' }, 502);
      } else {
        console.log('NorLha enquiry (no ENQUIRY_WEBHOOK_URL set):', JSON.stringify(enquiry));
      }

      // Plain HTML form posts (no JavaScript) get redirected to the thank-you page.
      if (!(request.headers.get('accept') || '').includes('application/json')) {
        return Response.redirect(new URL('/thank-you/', url).toString(), 303);
      }
      return json({ ok: true });
    }

    return env.ASSETS.fetch(request);
  },
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}
