# Node.js Backend Assignment

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/harsh0728/INDDEV-BACKEND-ASSESSSMENT.git

2. Install dependencies:
   npm install

3. Create a .env file in the root directory with the following content:

   (a). PORT=3000
   (b). MONGODB_URL="Your MongoDB URL"

4. Start the application:
   (a). node server.js
   or
   (b). nodemon server.js

5. API Endpoints

   (a). GET /api/v1/auth/users - List users with pagination, search, and sort.
   (b). POST /api/v1/auth/users - Create a new user.
   (c). GET /api/v1/auth/users/:id - Get user details by ID.
   (d). PUT /api/v1/auth/users/:id - Update user details by ID.
   (e). DELETE /api/v1/auth/users/:id - Delete user by ID.

6. Testing with Postman

   (a). Open Postman and create a new request.
   (b). Set the request type to POST.
   (c). Enter the URL: http://localhost:3000/api/v1/auth/users.
   (d). Go to the Body tab, select raw, and choose JSON from the dropdown.
   (e). Paste the JSON input into the body:

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
