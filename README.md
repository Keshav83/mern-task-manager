# ✅ TaskFlow — Your Smart MERN Task Manager

> Organize your work, track progress, and boost productivity — all in one elegant app.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Tech](https://img.shields.io/badge/Made%20with-MERN-4B8BBE?logo=react)
![License](https://img.shields.io/github/license/yourusername/taskflow)
![Status](https://img.shields.io/badge/status-active-success)

---



## ✨ Features

- 🧠 Smart task creation with tags & priorities
- 📅 Due dates and calendar views
- 📌 Pin important tasks
- 🔔 Notifications & Reminders
- 🔒 Secure JWT-based authentication
- 🎨 Beautiful, responsive UI

---

## 🧠 Tech Stack

**Frontend:**
- ⚛️ React.js
- 📦 Redux Toolkit
- 🎨 TailwindCSS

**Backend:**
- 🟢 Node.js + Express
- 🗃️ MongoDB + Mongoose
- 🔐 JWT Auth & bcrypt

**Dev Tools:**
- ⚙️ ESLint & Prettier
- 🌐 Vite / Webpack
- 📁 RESTful API Architecture

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/taskflow.git
cd taskflow
2️⃣ Setup environment
Create .env files in server/ and client/ with values:

🔐 .env (Backend)
ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://<your-mongo-uri>
JWT_SECRET=your_jwt_secret
🌐 .env (Frontend)
bash
Copy
Edit
VITE_API_URL=http://localhost:5000/api
3️⃣ Install dependencies
bash
Copy
Edit
# Server
cd server
npm install

# Client
cd ../client
npm install
4️⃣ Run the app
bash
Copy
Edit
# In root
npm run dev
Runs both client and server concurrently with auto-reload.

📁 Project Structure
bash
Copy
Edit
taskflow/
├── client/            # React Frontend
│   ├── src/
│   └── ...
├── server/            # Express Backend
│   ├── routes/
│   ├── controllers/
│   └── models/
├── .env.example
└── README.md
🧪 API Overview
POST /api/auth/register — Register new user

POST /api/auth/login — Login

GET /api/tasks — Fetch tasks

POST /api/tasks — Create task

PUT /api/tasks/:id — Update task

DELETE /api/tasks/:id — Delete task

🤝 Contribution Guide
Want to improve this project? Fork it, clone it, and submit a PR 🚀

bash
Copy
Edit
git checkout -b feature/new-feature
git commit -m "✨ Add new feature"
git push origin feature/new-feature
📜 License
Licensed under MIT License

🧑‍💻 Author
Built with ❤️ by Keshav Pareek

⭐️ Don't forget to star this repo if you like it!

yaml
Copy
Edit

---

Let me know if you want a minimal version, dark theme support showcase, or want to generate badges dynamically using [shields.io](https://shields.io/).








Ask ChatGPT
