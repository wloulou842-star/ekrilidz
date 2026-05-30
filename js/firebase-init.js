import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 🔐 Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 🚀 Init
const app = initializeApp(firebaseConfig);

// 🔑 Services
const auth = getAuth(app);
const db = getFirestore(app);

// 👁️ Auth State Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ Logged in:", user.uid);
  } else {
    console.log("🔒 No user logged in");
  }
});

// 📦 Export
export { app, auth, db };