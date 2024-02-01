# E-Commerce REST API

This project implements a RESTful API for an e-commerce system using Node.js and MongoDB. It includes features for managing products and variants, as well as searching products by name, description, or variant name.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up MongoDB:**

    - Make sure you have MongoDB installed and running locally or provide a MongoDB connection string in the `.env` file.

4. **Set up environment variables:**

    Create a `.env` file in the root directory with the following variables:

    ```env
    PORT=3000
    MONGODB_URI=<your-mongodb-connection-string>
    ```

5. **Start the server:**

    ```bash
    npm start
    ```

    The server should now be running on `http://localhost:3000`.

## Endpoints

- `POST /products`: Create a new product.
- `GET /products`: Get all products.
- `GET /products/search/:id`: Get a product by ID.
- `PUT /products/:id`: Update a product by ID.
- `DELETE /products/:id`: Delete a product by ID.
- `GET /products/search?q=<query>`: Search products by name, description, or variant name.


 [Your Name](https://github.com/your-username)
