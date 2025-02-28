# User Management API (CRUD)

This is a **RESTful API** built with **Node.js, Express.js, and MongoDB**, allowing **Create, Read, Update, and Delete (CRUD)** operations for user management.

## 🚀 Features
- **Create a New User** (POST)
- **Get All Users** (GET)
- **Get a Single User by ID** (GET)
- **Update User Details** (PUT)
- **Delete a User** (DELETE)

## 🛠 Tech Stack
- **Node.js** - JavaScript runtime environment
- **Express.js** - Backend framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variables
- **nodemon** - Auto-restart server on changes (for development)

## 📂 Project Structure
```
user-management-api/
│── models/
│   ├── User.js
│── routes/
│   ├── userRoutes.js
│── server.js
│── .env
│── package.json
│── README.md
```

## 📌 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/user-management-api.git
cd user-management-api
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Create a .env file
```
MONGO_URI=mongodb://127.0.0.1:27017/userDB
PORT=5000
```

### 4️⃣ Start the server
```sh
node server.js
```
Or for development with auto-restart:
```sh
npx nodemon server.js
```

## 📌 API Endpoints

### 1️⃣ Create a New User
**POST** `/api/users`
#### Request Body:
```json
{
    "name": "Alice",
    "email": "alice@example.com",
    "age": 25
}
```
#### Response:
```json
{
    "message": "User created successfully",
    "user": {
        "_id": "userId",
        "name": "Alice",
        "email": "alice@example.com",
        "age": 25,
        "createdAt": "2025-02-25T12:00:00Z"
    }
}
```

### 2️⃣ Get All Users
**GET** `/api/users`
#### Response:
```json
[
    {
        "_id": "userId1",
        "name": "Alice",
        "email": "alice@example.com",
        "age": 25
    },
    {
        "_id": "userId2",
        "name": "Bob",
        "email": "bob@example.com",
        "age": 30
    }
]
```

### 3️⃣ Get a Single User by ID
**GET** `/api/users/:id`
#### Response:
```json
{
    "_id": "userId",
    "name": "Alice",
    "email": "alice@example.com",
    "age": 25
}
```

### 4️⃣ Update a User
**PUT** `/api/users/:id`
#### Request Body:
```json
{
    "name": "Alice Brown",
    "email": "alicebrown@example.com",
    "age": 26
}
```
#### Response:
```json
{
    "message": "User updated successfully",
    "updatedUser": {
        "_id": "userId",
        "name": "Alice Brown",
        "email": "alicebrown@example.com",
        "age": 26
    }
}
```

### 5️⃣ Delete a User
**DELETE** `/api/users/:id`
#### Response:
```json
{
    "message": "User deleted successfully"
}
```

## 📌 Next Steps & Improvements
- Add JWT authentication for secure access
- Implement pagination for listing users
- Use MongoDB Atlas for cloud database

## 📌 License
This project is licensed under the MIT License.

## 📌 Author
👤 **Nitin Dwivedi**  
📧 nitinprofessional7838@gmail.com  
🔗 GitHub: [WithTrend](https://github.com/WithTrend)

