# Task Manager API

This is a simple Task Manager API built with Node.js, Express, and MongoDB using Mongoose. The API allows users to manage tasks with basic CRUD operations.

## Features

- Create a new task
- Retrieve all tasks
- Retrieve a task by ID
- Update a task by ID
- Delete a task by ID

## Technologies Used

- Node.js
- Express
- Mongoose
- MongoDB

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd task-manager-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

### Running the Application

To start the server, run:
```
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Retrieve all tasks
- `GET /tasks/:id` - Retrieve a task by ID
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID
