# Payment Gateway with Multi-Method Processing

## Overview
This project implements a simulated payment gateway supporting:
- Merchant authentication
- Order creation
- UPI and Card payments
- Hosted checkout page
- Merchant dashboard
- Dockerized deployment

The system is built to meet all specifications of **GPP Task 6**.

---

## Tech Stack
- Backend: Node.js (Express)
- Database: PostgreSQL
- Frontend: HTML + JavaScript (Nginx)
- Containerization: Docker & Docker Compose

---

## Services & Ports

| Service     | Port |
|------------|------|
| API        | 8000 |
| Dashboard  | 3000 |
| Checkout   | 3001 |
| PostgreSQL | 5432 |

---

## Getting Started

### 1. Clone the repository

bash
git clone <your-repo-url>
cd payment-gateway

### 2. Start all services
docker-compose up -d --build

Test Merchant (Auto-Seeded)

Email: test@example.com

API Key: key_test_abc123

API Secret: secret_test_xyz789

Available immediately after startup.

# API Endpoints
Health
GET /health

# Orders
POST /api/v1/orders
GET  /api/v1/orders/{order_id}

# Payments
POST /api/v1/payments
GET  /api/v1/payments/{payment_id}
GET  /api/v1/payments

# Public Checkout APIs
GET  /api/v1/orders/{order_id}/public
POST /api/v1/payments/public


# Checkout Page
http://localhost:3001/checkout?order_id={order_id}

## Testing Credentials
The database is automatically seeded with a test merchant. Use the following credentials to access the Dashboard:

- **Dashboard URL**: http://localhost:3000
- **API Key**: `key_test_abc123`

## Supports:

- UPI payments

- Card payments

- Payment status polling

- Dashboard
http://localhost:3000/login


# Features:

- API credentials display

- Transaction statistics

- Transactions table

# Notes

- Payments are simulated with delay and random success/failure

- No real banking integration is used

- Card CVV and full numbers are never stored

- Designed for automated evaluation compatibility

## Author

Sageda Jaffren Shaik
B.Tech – Artificial Intelligence & Machine Learning
Aditya University
Roll No: 23A91A6152


---
