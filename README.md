# Product List

This project is a full-stack e-commerce site built using MongoDB, Node.js, React, and Redux.

## Data

The data was generated using [faker](https://fakerjs.dev/) and is stored locally using MongoDB Community

## Server

The following routes are supported:

```
GET /products
GET /products/count
GET /products/:productId
GET /products/:productId/reviews
POST /products
POST /products/:productId/reviews
DELETE /products/:productId
DELETE /reviews/:reviewId
```

## Frontend

The frontend currently supports the /products route, which includes options for filtering, sorting, and searching products.

## Getting Started

### Prerequisites

- Node.js (version 14 or above)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/acl13/product-list.git
   cd product-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Starting the Server

Start the server and connect to MongoDB
Check console to ensure that MongoDB connection is working before proceeding

```bash
 node server.js
```

### Displaying Frontend

While the server is running, open a separate tab to run the frontend

```bash
 cd frontend/product-list
 npm run dev
```

Navigate to http://localhost:3000 to view in browser

---

This project has been created by a student at Parsity, an online software engineering course. The work in this repository is wholly of the student based on a sample starter project that can be accessed by looking at the repository that this project forks.

If you have any questions about this project or the program in general, visit [parsity.io](https://parsity.io/) or email hello@parsity.io.
