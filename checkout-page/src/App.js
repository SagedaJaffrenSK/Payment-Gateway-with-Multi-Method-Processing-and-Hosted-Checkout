import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetching the paid orders you verified in psql
    fetch('http://localhost:8000/api/v1/orders/all_paid')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Dashboard Error:", err));
  }, []);

  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Merchant Analytics</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ border: '1px solid #000', padding: '20px' }}>
          <h3>Payments</h3>
          <p style={{fontSize: '24px'}}>{data.length}</p>
        </div>
        <div style={{ border: '1px solid #000', padding: '20px' }}>
          <h3>Revenue</h3>
          <p style={{fontSize: '24px'}}>₹{(total / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
export default App;