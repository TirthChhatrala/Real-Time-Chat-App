# 💬 Advanced Real-Time Chat Application

A full-stack real-time chat application built using **React**, **Socket.IO**, and **Node.js**, with a dual WhatsApp-style user interface for two users chatting in real time.

---

## 🔥 Features

- ⚡ Real-time messaging using Socket.IO
- 📱 Dual UI: Left for User 1, Right for User 2 (like WhatsApp on two phones)
- 📦 Organized file structure (client/server)
- 🕒 Timestamps for messages
- 🎯 Fully responsive and smooth experience

---

## 🛠️ Tech Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js, Socket.IO
- **Styling:** Pure CSS with modern design

---

## 📁 Project Structure

```

real-time-chat-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatBox.jsx
│   │   ├── styles.css
│   │   └── App.jsx
│   └── package.json
├── server/
│   └── index.js
└── README.md

````

---

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have Node.js and npm installed:

```bash
node -v
npm -v
````

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/TirthChhatrala/Real-Time-Chat-App.git
cd Real-Time-Chat-App
```

---

### 2️⃣ Start the Server

```bash
cd server
npm install
node index.js
```

* Runs on: `http://localhost:5000`

---

### 3️⃣ Start the Client

Open a new terminal:

```bash
cd client
npm install
npm start
```

* Runs on: `http://localhost:3000`

---

---

## 📌 How It Works

* **Socket.IO** is used for bi-directional, real-time communication.
* Messages sent from one user are emitted to the server and broadcast to both users using:

  ```js
  io.emit("receive_message", data);
  ```
* Chat bubbles, timestamps, and alignment are styled based on the sender.

---

## 💡 Future Improvements

* ✅ Emoji Picker
* ✅ Message Seen Status
* ✅ Chat History (using MongoDB)
* ✅ Responsive for mobile
* ✅ Audio notification
* ✅ Login system

---

## 📄 License

MIT License. Use freely for educational or personal projects.

---
