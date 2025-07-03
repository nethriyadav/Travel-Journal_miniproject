# 🌍 Travel Journal Web Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to record, manage, and share travel experiences — including photos, descriptions, and locations.



---

## ✈️ Features

- 📌 **Create, edit, and delete** travel journals with title, location, date, and description
- 🖼️ **Upload and view photos** attached to each travel memory
- 🗺️ **Location tagging** and dynamic timeline-based UI
- 🔐 **User authentication** with protected routes and session management
- 📦 **RESTful API** with complete CRUD functionality
- 📱 Responsive design using React, Tailwind CSS / Bootstrap

---

## 🔧 Tech Stack

| Layer            | Technology                     |
|------------------|--------------------------------|
| Frontend         | React.js, Axios, Tailwind CSS or Bootstrap |
| Backend          | Node.js, Express.js            |
| Database         | MongoDB (via Mongoose)         |
| Authentication   | JWT (JSON Web Tokens)          |
| File Uploads     | Multer                         |
| Map Integration  | (Optional) Leaflet or Mapbox   |

---

## 🚀 How It Works

1. **Register / Login** as a user
2. **Add new journal entries** with date, location, text, and image
3. Browse your **journals in card or timeline view**
4. Edit, delete, or manage entries via an interactive dashboard

---

## 📁 Project Structure
Travel_Journal/
├── client/ (React frontend)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│ └── public/
├── server/ (Node + Express backend)
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── app.js
└── README.md

yaml
Copy
Edit

---

## 🔐 Authentication

- Users must register/login to access private journal entries.
- Protected routes handled via JWT tokens.
- Passwords securely hashed with `bcrypt`.

---

## 📦 Installation & Run (Locally)

```bash
# Clone the repo
git clone https://github.com/your-username/travel-journal.git
cd travel-journal

# Start backend
cd server
npm install
npm start

# Start frontend
cd ../client
npm install
npm start

👨‍💻 Developed By
Gadam Nethri
B.Tech ECE | MERN Stack Developer | Embedded & Web Projects
🔗 GitHub
🔗 LinkedIn

⭐️ Star This Repo
If you found this project useful, give it a ⭐ on GitHub and share your thoughts!

