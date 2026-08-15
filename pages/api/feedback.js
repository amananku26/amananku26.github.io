import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, message } = req.body || {};
  if (!message || typeof message !== 'string') return res.status(400).json({ error: 'Message is required' });

  const dataDir = path.join(process.cwd(), 'data');
  const file = path.join(dataDir, 'feedback.json');
  try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    let existing = [];
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8');
      existing = raw ? JSON.parse(raw) : [];
    }
    const entry = { id: Date.now(), name: name || null, message, createdAt: new Date().toISOString() };
    existing.push(entry);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2), 'utf8');
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Failed to write feedback:', err);
    return res.status(500).json({ error: 'Failed to save feedback' });
  }
}
