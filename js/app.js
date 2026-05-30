import { auth, db } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


// 🔐 LOGIN
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 🆕 REGISTER
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// 🚪 LOGOUT
export function logout() {
  return signOut(auth);
}


// 📦 ADD LISTING
export function addListing(data) {
  return addDoc(collection(db, "listings"), {
    ...data,
    createdAt: Date.now()
  });
}


// 📥 GET LISTINGS
export async function getListings() {
  const q = query(collection(db, "listings"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  let items = [];
  snap.forEach(doc => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}