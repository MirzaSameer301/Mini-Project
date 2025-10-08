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