/* Vercel serverless function: partner lead capture.
   Forwards to PARTNER_LEAD_WEBHOOK when configured. When unset, logs the
   lead and still returns success so preview deployments work end to end.
   Partner leads are never mixed with player email capture (see
   player-lead.js). */
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'POST only' });
  }
  const b = req.body || {};
  const lead = {
    type: 'partner',
    receivedAt: new Date().toISOString(),
    name: String(b.name || ''),
    company: String(b.company || ''),
    role: String(b.role || ''),
    audienceSize: String(b.audienceSize || ''),
    archiveType: String(b.archiveType || ''),
    email: String(b.email || '')
  };
  const hook = process.env.PARTNER_LEAD_WEBHOOK;
  if (hook) {
    try {
      await fetch(hook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(lead)
      });
    } catch (err) {
      console.error('partner-lead forward failed', err);
    }
  } else {
    console.log('partner-lead (PARTNER_LEAD_WEBHOOK unset)', lead);
  }
  return res.status(200).json({ ok: true });
};
