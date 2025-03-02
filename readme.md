# Auth API

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install Frontend Dependencies
```sh
cd client
yarn
```

### 3. Install Backend Dependencies
```sh
cd ../server
npm install
```

### 4. Start the Frontend
```sh
cd ../client
yarn start
```

### 5. Start the Backend
```sh
cd ../server
npm run start
```

## Authentication API

### User Model:
A user consists of the following properties:
- **id** (UUID)
- **username** (string, required)
- **password** (hashed, required)

### Endpoints:

#### 1️⃣ Register a New User
**POST /auth/register**
```json
{
  "username": "exampleUser",
  "password": "securePassword"
}
```
_Response:_
```json
{
  "id": "generated-uuid",
  "username": "exampleUser"
}
```

#### 2️⃣ Login
**POST /auth/login**
```json
{
  "username": "exampleUser",
  "password": "securePassword"
}
```
_Response:_
```json
{
  "token": "jwt-token"
}
```

#### 3️⃣ Fetch User Details (Protected Route)
**GET /auth/me**
- Requires **Authorization: Bearer <JWT-Token>** header.

_Response:_
```json
{
  "id": "user-uuid",
  "username": "exampleUser"
}
```

---
Now you're ready to build and test your authentication API! 🚀

