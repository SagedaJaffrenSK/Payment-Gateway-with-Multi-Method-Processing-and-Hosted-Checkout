## Listing all endpoints with request/response examples.

# Create Order

- Endpoint: POST /api/v1/orders

- Request: {"amount": 50000}

- Response: 201 Created - {"id": "order_12430nguc", "status": "created"}

# Confirm Payment

- Endpoint: POST /api/v1/payments

- Request: {"order_id": "order_12430nguc"}

- Response: 200 OK - {"status": "success"}

# Fetch Analytics

- Endpoint: GET /api/v1/orders/all_paid

- Response: 200 OK - Returns an array of orders with status 'paid'