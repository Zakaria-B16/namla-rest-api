# REST API for orders and suppliers

A REST API for tracking orders and suppliers on an e-commerce platform using **Node.js**, **Express.js**, **MongoDB** and **Swagger**

---

## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/Zakaria-B16/namla-rest-api.git
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
PORT= 4000
MONGODB_URI= YOUR MONGODB URI
DB_NAME= DATABASE NAME OF YOUR CHOICE
```

Step 4: Start the API by

```bash
npm start
```

## API Reference

### Orders

#### Get all orders

```http
  GET /orders
```

#### Get order

```http
  GET /orders/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of order to fetch |

#### Put order

```http
  POST /orders
```

| Parameter                            | Type                                 | Description                |
| :----------------------------------- | :----------------------------------- | :------------------------- |
| `{address,products,costumer,seller}` | `{string, [string], string, string}` | **Required**. Order schema |

### Suppliers

#### Get all suppliers

```http
  GET /suppliers
```

#### Get supplier

```http
  GET /suppliers/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of order to fetch |

#### Put supplier

```http
  POST /suppliers
```

| Parameter                 | Type                         | Description                   |
| :------------------------ | :--------------------------- | :---------------------------- |
| `{address,products,name}` | `{string, [string], string}` | **Required**. Supplier schema |

## Author

- [**Zakaria BOURENANE**](https://zakaria-bourenane.ml)

## License

This project is licensed under the MIT License.
