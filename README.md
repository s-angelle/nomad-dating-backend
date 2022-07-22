# The Wander Shop v2

## Description

This project is the full stack application version of my previous CRUD project:

https://github.com/s-angelle/the-wander-shop-app.git

## How to Access This Project

This project (backend) has been successfully deployed here:

https://the-wander-shop-v2.onrender.com

(To test this application, make sure to utilize the routes mentioned below)

## Development Process

| DATE       | PROGRESS                                           | BLOCKERS | GOALS                   |
| ---------- | -------------------------------------------------- | -------- | ----------------------- |
| 06/29/2022 | uploading initial backend + auth                   | None     | stretch goals           |
| 07/01/2022 | updated models/routes/controllers                  | None     | implement shopping cart |
| 07/04/2022 | added stripe payment system                        | None     | stretch goals           |
| 07/09/2022 | updated server.js and readme                       | None     | stretch goals           |
| 07/10/2022 | updated users / orders controllers and users route | None     | stretch goals           |
| 07/21/2022 | organized / formatted code                         | None     | stretch goals           |

## Routes

---

### User

| Verb | Path                | Description   |
| ---- | ------------------- | ------------- |
| POST | /api/v1/users       | adds new user |
| POST | /api/v1/users/login | user login    |

---

- Routes Below Require Authorization

---

### User

| Verb   | Path              | Description  |
| ------ | ----------------- | ------------ |
| GET    | /api/v1/users/:id | returns user |
| PUT    | /api/v1/users/:id | updates user |
| DELETE | /api/v1/users/:id | deletes user |

### Products

| Verb   | Path                 | Description       |
| ------ | -------------------- | ----------------- |
| GET    | /api/v1/products     | list of products  |
| POST   | /api/v1/products     | adds new product  |
| PUT    | /api/v1/products/:id | updates a product |
| DELETE | /api/v1/products/:id | deletes a product |

## Technologies

---

1. Express
2. Mongoose
3. Bcrypt
4. JSON Web Token

## Stretch Goals

---

- Sucessfully implement third-party API
- Create admin account w/ authentication
