## Architecture Overview 

-> This document explains the system components and data flow required by your instructions.

# System Components:

- Frontend (Checkout): Nginx-based service on port 3001 handling payment inputs.

- Dashboard: Nginx-based service on port 3000 for merchant analytics.

- Backend API: Node.js/Express service on port 8000 handling validation and persistence.

- Database: PostgreSQL on port 5432 for transaction storage.

# Data Flow:

- User creates an order via the API.

- Customer navigates to the Checkout Page with the order_id.

- Payment is processed; the backend validates the request (e.g., Luhn check) and updates the status to 'paid' in PostgreSQL.

- Merchant Dashboard fetches 'paid' orders to update revenue and transaction lists in real-time.