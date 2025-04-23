# User Profile Manager

This project is a User Profile Manager built with Node.js, Express, and MongoDB. It allows users to create and manage user profiles with basic information such as name, email, and age.

## Features

- Create a new user profile
- Fetch all user profiles
- MongoDB as the database for storing user information

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Project Structure

```
user-profile-manager
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── database.js       # Database connection logic
│   ├── controllers
│   │   └── userController.js  # User controller for handling requests
│   ├── models
│   │   └── user.js           # User model and schema
│   ├── routes
│   │   └── userRoutes.js      # User-related routes
│   └── types
│       └── index.js          # Type definitions for user data
├── package.json               # NPM configuration file
├── .env                       # Environment variables (MongoDB URI)
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-profile-manager
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection URI:
   ```
   MONGODB_URI=<your_mongodb_connection_uri>
   ```

5. Start the application:
   ```
   npm start
   ```

## Usage

- To create a new user, send a POST request to `/api/users` with the user details in the request body.
- To fetch all users, send a GET request to `/api/users`.