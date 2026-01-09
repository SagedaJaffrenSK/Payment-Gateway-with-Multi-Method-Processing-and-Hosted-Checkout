import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [stats, setStats] = useState({ totalCount: 0, totalAmount: 0, payments: [] });

  useEffect(() => {
    // This fetches the data for the table
    axios.get('http://localhost:8000/api/v1/merchant/payments', {
      headers: {
        'X-Api-Key': 'key_test_abc123',
        'X-Api-Secret': 'secret_test_xyz789'
      }
    })
    .then(res => setStats(res.data))
    .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>Merchant Analytics</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ flex: 1, padding: '20px', background: '#ecf0f1', borderRadius: '8px' }}>
          <h3>Total Payments</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{stats.totalCount}</p>
        </div>
        <div style={{ flex: 1, padding: '20px', background: '#ecf0f1', borderRadius: '8px' }}>
          <h3>Total Revenue</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#27ae60' }}>
            ₹{(stats.totalAmount / 100).toFixed(2)}
          </p>
        </div>
      </div>

      <table border="1" cellPadding="12" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#34495e', color: 'white' }}>
          <tr>
            <th>Payment ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {stats.payments.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>₹{(p.amount / 100).toFixed(2)}</td>
              <td><b style={{ color: p.status === 'success' ? 'green' : 'orange' }}>{p.status.toUpperCase()}</b></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;