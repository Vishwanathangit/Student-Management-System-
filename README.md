# 🎓 Student Management System

A simple CRUD-based web application for managing student records using **Node.js**, **Express.js**, **MongoDB (via Mongoose)**, and **EJS templating engine**.

It allows users to **add**, **edit**, **view**, and **delete** student data. Styled with basic CSS, and connected to MongoDB Atlas for cloud database operations.

---

## 🚀 Live Demo

🌐 [Live Website](https://student-management-system-cslj.onrender.com)  
🔗 [GitHub Repository](https://github.com/Vishwanathangit/Student-Management-System-.git)

---

## 📁 Project Structure

<pre>
  ```
  student-management-system/
├── models/
│ └── student.js # Mongoose schema
├── routes/
│ └── studentRoutes.js # All route handlers
├── views/
│ ├── index.ejs # Display student list
│ ├── add.ejs # Add new student form
│ └── edit.ejs # Edit student form
├── public/
│ ├── style.css # CSS styling
│ └── icon.png # Website icon
├── .env # Environment variables (MongoDB URI)
├── .gitignore # Ignore node_modules and .env
├── app.js # Main server entry point
├── package.json # Project metadata and dependencies
└── README.md # This file
  ```
</pre>


---

## 💡 Features

- Add new student
- View list of all students
- Edit student details
- Delete student record
- Connected to MongoDB Atlas
- EJS templating for views

---

## ⚙️ Installation

### 1. Clone the repository


git clone https://github.com/yourusername/student-management-system.git
cd student-management-system

2. Install dependencies
    npm install
3.Create a .env file
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/studentDB?retryWrites=true&w=majority
4. Run the app
   node app.js

🧪 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB Atlas, Mongoose

Templating: EJS

Styling: CSS

View Engine: EJS
