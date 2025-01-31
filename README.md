# Chat App (MERN Stack)

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and deployed on Render.

## 🌐 Live Demo

🔗 [Chat App on Render](https://chat-app-mern-k9no.onrender.com)

## 🚀 Features

✅ Real-time messaging using WebSockets (Socket.io)
✅ Secure authentication with JWT
✅ RESTful API with Express.js
✅ MongoDB for data storage
✅ Responsive UI built with React & TailwindCSS
✅ User-friendly interface with smooth animations

## 📸 Screenshots

### 🔵 Login Page
![Login Page](demo%201.JPG)

### 🟢 Chat Interface
![Chat Interface](demo%202.JPG)

## 🛠️ Tech Stack

🖥 **Frontend:** React, TailwindCSS/Bootstrap\
🖥 **Backend:** Node.js, Express.js\
🗄 **Database:** MongoDB\
🔐 **Authentication:** JWT\
📡 **WebSockets:** Socket.io

## 📂 Folder Structure

```
Chat-App-MERN/  
│── client/        # React frontend  
│── server/        # Node.js backend  
│── .gitignore  
│── README.md  
│── package.json  
```

## 🎯 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/al9o11/Chat-App-MERN.git
   cd Chat-App-MERN
   ```
2. **Install dependencies for the client and server:**
   ```sh
   cd client
   npm install  
   cd ../server
   npm install
   ```
3. **Create a `.env` file in the `server` folder and add:**
   ```sh
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_secret_key  
   ```
4. **Start the backend server:**
   ```sh
   cd server
   npm run dev
   ```
5. **Start the frontend:**
   ```sh
   cd client
   npm start
   ```

## 🚧 Roadmap

📌 [ ] Implement WebSockets for real-time chat
📌 [ ] Add user profiles
📌 [ ] Deploy to Vercel/Render
📌 [ ] Add typing indicators

## 👤 Author

- 💻 GitHub: [al9o11](https://github.com/al9o11)
- 🔗 LinkedIn: [al9o1](https://www.linkedin.com/in/al9o1/)

## 🌟 Contributing

🚀 Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📜 License

📄 This project is licensed under the MIT License.

