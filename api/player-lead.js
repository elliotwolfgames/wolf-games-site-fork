/* Vercel serverless function: player email capture ("Save Progress").
   Tagged as player and kept separate from partner leads. Forwards to
   PLAYER_LEAD_WEBHOOK when configured; when unset, logs and returns
   success so preview deployments work end to end. */
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'POST only' });
  }
  const b = req.body || {};
  const lead = {
    type: 'player',
    receivedAt: new Date().toISOString(),
    email: String(b.email || ''),
    deviceId: String(b.deviceId || ''),
    source: String(b.source || '')
  };
  const hook = process.env.PLAYER_LEAD_WEBHOOK;
  if (hook) {
    try {
      await fetch(hook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(lead)
      });
    } catch (err) {
      console.error('player-lead forward failed', err);
    }
  } else {
    console.log('player-lead (PLAYER_LEAD_WEBHOOK unset)', lead);
  }
  return res.status(200).json({ ok: true });
};
