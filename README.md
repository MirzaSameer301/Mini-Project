# ColaabApp

A collaborative list management application.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT
- **Other:** CORS, dotenv

---

# User Authentication API

This backend provides endpoints for user registration and login using JWT authentication.

## Endpoints

### Register User

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "JWT_TOKEN"
  }
  ```

### Login User

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "JWT_TOKEN"
  }
  ```

## Notes

- All passwords are securely hashed before storing.
- JWT token is returned on successful registration and login.
- Use the token for authenticated requests.

## Related Files

- [src/controllers/authController.ts](src/controllers/authController.ts)
- [src/routes/authRoutes.ts](src/routes/authRoutes.ts)
- [src/models/userModel.ts](src/models/userModel.ts)

---

# List CRUD Operations API

This document describes the API endpoints for managing lists in the Colaab App backend.

## Endpoints

All endpoints require authentication via a JWT token in the `Authorization` header.

### Create List

- **URL:** `/api/lists/create`
- **Method:** `POST`
- **Headers:**  
  `Authorization: Bearer <JWT_TOKEN>`
- **Body:**
  ```json
  {
    "title": "Groceries",
    "description": "Weekly shopping list"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "list_id",
    "title": "Groceries",
    "description": "Weekly shopping list",
    "createdBy": "user_id",
    "createdAt": "2024-06-10T12:00:00.000Z",
    "updatedAt": "2024-06-10T12:00:00.000Z"
  }
  ```

### Get All Lists

- **URL:** `/api/lists/get`
- **Method:** `GET`
- **Headers:**  
  `Authorization: Bearer <JWT_TOKEN>`
- **Response:**
  ```json
  [
    {
      "_id": "list_id",
      "title": "Groceries",
      "description": "Weekly shopping list",
      "createdBy": "user_id",
      "createdAt": "2024-06-10T12:00:00.000Z",
      "updatedAt": "2024-06-10T12:00:00.000Z"
    }
    // ...more lists
  ]
  ```

### Get List By ID

- **URL:** `/api/lists/getbyid/:id`
- **Method:** `GET`
- **Headers:**  
  `Authorization: Bearer <JWT_TOKEN>`
- **Response:**
  ```json
  {
    "_id": "list_id",
    "title": "Groceries",
    "description": "Weekly shopping list",
    "createdBy": "user_id",
    "createdAt": "2024-06-10T12:00:00.000Z",
    "updatedAt": "2024-06-10T12:00:00.000Z"
  }
  ```

### Update List

- **URL:** `/api/lists/update/:id`
- **Method:** `PUT`
- **Headers:**  
  `Authorization: Bearer <JWT_TOKEN>`
- **Body:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "list_id",
    "title": "Updated Title",
    "description": "Updated Description",
    "createdBy": "user_id",
    "createdAt": "2024-06-10T12:00:00.000Z",
    "updatedAt": "2024-06-10T12:05:00.000Z"
  }
  ```

### Delete List

- **URL:** `/api/lists/delete/:id`
- **Method:** `DELETE`
- **Headers:**  
  `Authorization: Bearer <JWT_TOKEN>`
- **Response:**
  ```json
  {
    "message": "List deleted successfully"
  }
  ```

## Related Files

- [src/controllers/listController.ts](src/controllers/listController.ts)
- [src/routes/listRoutes.ts](src/routes/listRoutes.ts)
- [src/models/listModel.ts](src/models/listModel.ts)