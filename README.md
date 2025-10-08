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