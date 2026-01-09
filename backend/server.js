const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

app.use(cors()); // ALLOWS BROWSER TO TALK TO PORT 8000
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.post('/api/v1/orders', async (req, res) => {
  const id = `order_${Math.random().toString(36).substr(2, 9)}`;
  // In backend/server.js, change 'm123' to this ID:
await pool.query('INSERT INTO orders (id, merchant_id, amount, status) VALUES ($1, $2, $3, $4)', 
  [id, '550e8400-e29b-41d4-a716-446655440000', req.body.amount, 'created']);
  res.json({ id });
});

app.post('/api/v1/payments', async (req, res) => {
  const { order_id } = req.body;
  await pool.query('UPDATE orders SET status = $1 WHERE id = $2', ['paid', order_id]);
  res.json({ status: 'success' });
});

app.get('/api/v1/orders/all_paid', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM orders WHERE status = 'paid'");
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(8000, '0.0.0.0', () => console.log('Backend Online'));