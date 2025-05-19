# Challenge 2: Understanding Frontend-Backend Communication

## Introduction
Welcome to Challenge 2! In this challenge, you'll learn how the frontend and backend of our Quart application work together. This is a fundamental concept in web development that you'll use in every web application you build.

## What You'll Learn
- How web applications are structured with frontend and backend components
- The concept of HTTP requests and responses
- How to make requests from the frontend to the backend
- How the backend processes requests and sends responses

## The Application Structure

### Backend (Python)
Our Quart application has a Python backend located in the `app/backend` directory. The backend is responsible for:
- Handling incoming requests from the frontend
- Processing data (in real applications, this often involves databases)
- Sending responses back to the frontend

### Frontend (React)
Our frontend is built with React and TypeScript, located in the `app/frontend` directory. The frontend is responsible for:
- Displaying the user interface
- Making requests to the backend
- Showing the data received from the backend

## What is a Request and Response?

### Request
A request is when your browser (or frontend) asks the server (backend) for something. Think of it like asking a question:

1. The frontend sends a request to the backend
2. The request includes:
   - The URL (where to send the request)
   - The HTTP method (GET, POST, etc.)
   - Any data being sent

### Response
A response is when the server answers back. Think of it like getting an answer to your question:

1. The backend processes the request
2. The backend sends back a response
3. The response includes:
   - The data you requested
   - A status code (like 200 for success)

## The Name Challenge

### What You'll Do
1. Start by looking at the code in `app/backend/blueprints/name.py`
2. Find the `CURRENT_NAME` variable
3. Change the name to your own name
4. Navigate to `/name` in your browser
5. Click the "Fetch Name" button to see your name appear

### How It Works
1. When you click "Fetch Name":
   - The frontend makes a GET request to `/api/name`
   - This request goes to our Quart backend
2. The backend:
   - Receives the request
   - Gets the name from `CURRENT_NAME`
   - Sends back a response with the name
3. The frontend:
   - Receives the response
   - Shows your name on the page

## Try It Yourself
1. Change the name in the backend
2. See how it updates in the frontend
3. Try refreshing the page
4. Try clicking the button multiple times

## What You've Learned
By completing this challenge, you've learned:
- How to make HTTP requests from the frontend
- How to handle responses in React
- How to create endpoints in Quart
- The flow of data between frontend and backend
                            

Great job! You've taken your first step in understanding how web applications communicate between frontend and backend.