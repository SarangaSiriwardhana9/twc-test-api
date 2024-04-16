# TWC Test API

This is the backend API for the TWC Contacts Portal App, built as part of the TWC Intern Assignment. It includes endpoints for user authentication and contact management.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Getting Started

To run the API locally, follow these steps:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add your MongoDB connection URI as `MONGODB_URI` and JWT Secret as `JWT_SECRET`.
4. Start the server by running `npm start`.

## API Endpoints

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Login an existing user
- `POST /api/auth/signout` - Logout user
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Add a new contact
- `PUT /api/contacts/:id` - Update a contact
- `DELETE /api/contacts/:id` - Delete a contact

## API Documentation

For testing the API endpoints, refer to the Postman documentation [here](https://documenter.getpostman.com/view/26798436/2sA3BkbCe6).


