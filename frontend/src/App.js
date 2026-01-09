import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const orderId = new URLSearchParams(window.location.search).get('order_id');

  const headers = {
    'X-Api-Key': 'key_test_abc123',
    'X-Api-Secret': 'secret_test_xyz789'
  };

  useEffect(() => {
    if (!orderId) { setLoading(false); return; }
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/orders/${orderId}`, { headers });
        setOrder(res.data);
      } catch (err) { console.error("Order Load Failed", err); }
      setLoading(false);
    };
    fetchOrder();
  }, [orderId]);

  const handlePay = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/v1/payments', {
        order_id: orderId,
        method: 'upi',
        vpa: 'test@upi'
      }, { headers });
      pollStatus(res.data.id);
    } catch (err) { alert("Payment Failed"); }
  };

  const pollStatus = (payId) => {
    const interval = setInterval(async () => {
      const res = await axios.get(`http://localhost:8000/api/v1/payments/${payId}`, { headers });
      if (res.data.status === 'success') {
        setPaymentStatus('success');
        clearInterval(interval);
      }
    }, 2000);
  };

  if (loading) return <div>Loading order {orderId}...</div>;
  if (!order) return <div>Invalid Order ID. Please generate a new one.</div>;

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>Complete Payment</h2>
      <p>Amount: ₹{(order.amount / 100).toFixed(2)}</p>
      {paymentStatus === 'success' ? (
        <div style={{ color: 'green' }}><h3>Payment Successful!</h3></div>
      ) : (
        <button onClick={handlePay} style={{ padding: '10px 20px', cursor: 'pointer' }}>Pay Now</button>
      )}
    </div>
  );
}

export default App;