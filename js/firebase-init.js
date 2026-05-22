// js/firebase-init.js
// Firebase initialization and simple Firestore helpers (modular SDK via CDN)
// Usage: include this file with <script type="module" src="/js/firebase-init.js"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// If you prefer to keep config out of the file, set window.__FIREBASE_CONFIG__ before loading this module.
const firebaseConfig = window.__FIREBASE_CONFIG__ || {
  apiKey: "AIzaSyDXp0NC0dV0QHFzWwovlEczI44wlJUEdSw",
  authDomain: "ekrilidz-af404.firebaseapp.com",
  projectId: "ekrilidz-af404",
  storageBucket: "ekrilidz-af404.firebasestorage.app",
  messagingSenderId: "945902801388",
  appId: "1:945902801388:web:05ee5a76725edf9d4df0c9",
  measurementId: "G-B9FL7TQ8VC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helpers
export async function addListing(data) {
  const ref = await addDoc(collection(db, "listings"), data);
  return { id: ref.id };
}

export async function getListing(id) {
  const d = await getDoc(doc(db, "listings", id));
  return d.exists() ? { id: d.id, ...d.data() } : null;
}

export async function getAllListings() {
  const snaps = await getDocs(collection(db, "listings"));
  return snaps.docs.map(d => ({ id: d.id, ...d.data() }));
}

export function listenListings(callback) {
  return onSnapshot(collection(db, "listings"), snapshot => {
    const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(items);
  });
}

// Quick test read (non-destructive) — will log count or an error
(async () => {
  try {
    const snaps = await getDocs(collection(db, "test"));
    console.log("[firebase-init] Firestore test documents:", snaps.size);
  } catch (e) {
    console.warn("[firebase-init] Firestore test read failed:", e && e.message ? e.message : e);
  }
})();

console.log("[firebase-init] Initialized Firestore for project:", firebaseConfig.projectId);
