# Installation
Run the following command to clone the repository
```
git clone https://github.com/rohit12112151/todolist.git
```
Go to ```frontend``` and ```backend``` directory to install packages
```
cd frontend
npm install
```
```
cd backend
npm install
```
# Configuration
Create ```.env``` file inside ```backend``` directory and copy the following code

```
MONGO_URI=Your mongodb URI
GMAIL_USERNAME=your gmail address 
GMAIL_PASSWORD=password created inside 'App Password' section under google accounts setting
PORT=8000
JWT_SECRET=a random secret key eg. thisisasecretkey
```
# Run the App
Go to ```backend``` and ```frontend``` directory and start the server
```
cd backend
nodemon server
```
```
cd frontend
npm start
```








Authentication flow :-


User Requests Access:

A user or client makes an HTTP request to one of the API endpoints of your application.
Authentication Request:

The user's request may contain an Authorization header with a JWT token.
Authentication Middleware:

The Express.js middleware function requireAuth is used to check for the presence of the Authorization header and extract the JWT token.
Authentication Verification:

The code attempts to verify the JWT token using jwt.verify and the process.env.JWT_SECRET as the secret key. This step checks if the token is valid and whether it has been tampered with. If the token is invalid or expired, it will throw an error.
Successful Authentication:

If the JWT token is valid, the decoded object will contain the user's information. The code attaches this information to the req.user property and also stores the token itself in req.token.
Failed Authentication:

If the JWT token is invalid or has expired, it will trigger an error, and the code will respond with a 500 Internal Server Error status and a JSON message containing the error information.
Access Control (Authorization):

Although not shown in the provided code, after successful authentication, you can implement additional logic to determine whether the authenticated user has permission to access the specific resource or perform the requested action. This is where authorization checks typically come into play.
Resource Handling:

If the user is authenticated and authorized to access the requested resource, the Express application proceeds to handle the specific API endpoint logic, which could involve retrieving data from a database, performing actions, or generating responses.
Response:

The Express application sends a response back to the user or client, typically with the requested data or an acknowledgment of the action taken.
In this authentication flow, the JSON Web Token serves as a means of proving the user's identity. If the token is valid and not expired, it allows the user to access protected routes without requiring them to re-enter their credentials with every request. If the token is missing, invalid, or expired, the user is denied access. This type of authentication is stateless and commonly used in modern web applications and APIs.