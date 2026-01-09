# Payment Gateway Implementation

## Setup
1. Clone the repository.
2. Run `docker-compose up -d`.
3. Access services:
   - Dashboard: http://localhost:3000
   - Checkout: http://localhost:3001
   - API: http://localhost:8000

## Architecture
The system uses a microservices architecture:
- **Nginx**: Serving static frontends for Dashboard and Checkout.
- **Node.js**: Express API handling logic and validation.
- **Postgres**: Persistent storage with automatic initialization.

## API Documentation
### Create Order
`POST /api/v1/orders`
- **Request**: `{"amount": 50000}`
- **Response**: `201 Created` - `{"id": "order_xyz", "status": "created"}`

### Process Payment
`POST /api/v1/payments`
- **Request**: `{"order_id": "order_xyz", "vpa": "test@upi"}`
- **Response**: `200 OK` - `{"status": "success"}`