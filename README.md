# Kodflix Backend API

This is the Node.js Express backend for the Kodflix MERN stack movie application.

## Prerequisites
- Node.js installed
- MongoDB running locally or a MongoDB Atlas URI

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the root directory and copy the contents from `.env.example`.
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/kodflix
   JWT_SECRET=your_jwt_secret_here
   TMDB_API_KEY=your_tmdb_api_key_here
   ```
   *Note: Obtain a TMDB API Key from [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)*

3. **Start the Server**
   ```bash
   # Run the server
   node server.js
   ```

## Frontend Integration (React)

When interacting with protected endpoints (like the Dashboard), the React frontend must include the JWT token in the `Authorization` header of the HTTP request. 

Here is an example using `axios`:

```javascript
import axios from 'axios';

// 1. Assuming you have the token saved in localStorage after logging in
const token = localStorage.getItem('token');

// 2. Setting up the Axios configuration
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

// 3. Making the request
const fetchDashboard = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/dashboard', config);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching dashboard', error);
  }
};
```

### API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate a user and get a token
- `GET /api/dashboard` (Protected) - Get user dashboard user data
- `GET /api/movies/trending` - Get trending movies from TMDB
