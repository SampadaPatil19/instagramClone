# 📸 Instagram Clone

A full-featured Instagram Clone built with **ReactJS**, **JavaScript**, **Redux**, and **Firebase**. This project replicates core Instagram features such as posting images, user authentication, and real-time updates.


---

## 🔧 Tech Stack

- **Frontend**: ReactJS, JavaScript, Redux, CSS
- **Backend / Services**: Firebase (Authentication, Firestore, Storage)

---

## ✨ Features

- 🔐 User Authentication (Login/Signup) using Firebase Auth
- 🖼️ Upload and Post Images
- 💬 Real-time Comments using Firestore
- ❤️ Like Functionality
- 🧠 Global State Management with Redux
- 📱 Responsive Design

---

## 📁 Folder Structure

---

## 🔌 Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Create Firestore Database
4. Enable Firebase Storage
5. Add your Firebase config to `firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

