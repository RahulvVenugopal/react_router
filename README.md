React Router SPA – Protected Dashboard with Nested Routes

A modern Single Page Application (SPA) built using React Router v6, featuring protected routes and nested dashboard pages. This project is ideal for learning routing concepts or building a starter React application with authentication logic.

🚀 Features
🏠 Public Pages

Home – Simple landing page

Login – login system using localStorage

🔐 Protected Dashboard

Accessible only when logged in:

Profile

Settings

Notifications

🧭 Routing Highlights

Protected route guard (PrivateRoute)

Nested routing inside Dashboard

Auto-redirect on unauthorized access


The app will open at:
👉 http://localhost:3000

🔑 Authentication Logic (Simple & Fake)

Clicking Login stores:

{ "isLoggedIn": true }


into localStorage.

Dashboard pages are shown only if logged in.

Logout removes the key and redirects to /login.

This is strictly for demo purposes — not production-level security.

📌 Available Routes
Route	Description
/	Home Page
/login	Login Page
/dashboard	Protected Dashboard Layout
/dashboard/profile	User Profile
/dashboard/settings	Account Settings
/dashboard/notifications	Notifications Page
🎯 Purpose of the Project

This mini-project is perfect for:

Learning React Router v6

Understanding protected routes

Practicing nested layouts

Creating a clean React starter project

📦 Tech Stack

React 18

React Router v6

JavaScript (ES6+)

LocalStorage (for auth)

CSS (basic styling)

output :

