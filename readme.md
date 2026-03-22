# Smart Inventory Manager

A modern, full-stack web application designed for seamlessly managing products, tracking inventory quantities, and categorizing items in real-time. Built with a React frontend and an Express/MongoDB backend, this app supports robust CRUD operations within an elegant and user-friendly interface.

[Hosted Link](https://smart-inventory-manager-chi.vercel.app/)

## 🌟 Features

- **Inventory Dashboard**: View all current stock comprehensively on a single categorized grid interface.
- **Product Management**: Easily add new products consisting of properties like `name`, `quantity`, `category`, and `price`.
- **Edit & Delete**: Full Update and Delete operations directly from the user dashboard.
- **Responsive Layout**: Designed with Tailwind CSS to offer a beautifully centered, grid-based aesthetic that adapts from mobile displays to large desktop monitors.

## 🛠️ Tech Stack

- **Frontend**: React (v19), Tailwind CSS (v3.4), PostCSS, Axios
- **Backend**: Node.js, Express.js, Mongoose (MongoDB)
- **Database**: MongoDB Atlas

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed. You'll also need a running MongoDB database or a MongoDB Atlas URI (which should be provided in your `server/.env`).

### 1. Start the Backend Server
```bash
cd server
npm install 
node server.js
```
*The server will typically run on `http://localhost:5000`.*

### 2. Start the Frontend Client
Open a fresh terminal window, then:
```bash
cd client
npm install
npm start
```
*The frontend will start and be accessible at `http://localhost:3000`.*

## 🎨 UI/UX Highlights
- Dynamic grids for adding specific product forms.
- Interactive shadow and focus rings on inputs for greater accessibility.
- Smooth transitions for edit/delete interactions.
