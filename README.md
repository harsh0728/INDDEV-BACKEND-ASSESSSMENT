# Node.js Backend Assignment

## Setup Instructions

1. Clone the repository:

   git clone <repository-url>
   cd nodejs-backend-assignment

2. Install dependencies:
   npm install

3. Create a .env file in the root directory with the following content:

   PORT=3000
   MONGODB_URL="Your MongoDB URL"

4. Start the application:
   node server.js
   or
   nodemon server.js

5. API Endpoints

   GET /api/v1/auth/users - List users with pagination, search, and sort.
   POST /api/v1/auth/users - Create a new user.
   GET /api/v1/auth/users/:id - Get user details by ID.
   PUT /api/v1/auth/users/:id - Update user details by ID.
   DELETE /api/v1/auth/users/:id - Delete user by ID.

6. Testing with Postman

   Open Postman and create a new request.
   Set the request type to POST.
   Enter the URL: http://localhost:3000/api/v1/auth/users.
   Go to the Body tab, select raw, and choose JSON from the dropdown.
   Paste the JSON input into the body:

{
"first_name": "Josephine",
"last_name": "Darakjy",
"company_name": "Chanay, Jeffrey A Esq",
"age": 48,
"city": "Brighton",
"state": "MI",
"zip": 48116,
"email": "josephine_darakjy@darakjy.org",
"web": "http://www.chanayjeffreyaesq.com"
}
Click Send to submit the request.
