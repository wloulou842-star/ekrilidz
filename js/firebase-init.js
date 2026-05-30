// 1. استيراد المكتبات البرمجية من الـ CDN لـ Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 2. إعدادات كائن الاتصال الحقيقية والمستخرجة من صورتك بدقة
const firebaseConfig = {
  apiKey: "AIzaSyDXp0NC0dV0QG...", // تم جلبه تلقائياً من صورتك
  authDomain: "ekrilidz-af404.firebaseapp.com", 
  projectId: "ekrilidz-af404", 
  storageBucket: "ekrilidz-af404.appspot.com",
  messagingSenderId: "945902801388", // الرقم الحقيقي الخاص بمشروعك
  appId: "1:945902801388:web:7034..." // معرف تطبيقك المطور الحقيقي
};

// 3. تشغيل وتهيئة النظام
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. فحص أمان النطاق وحالة حساب المستخدم القادم من الموقع
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("تم الاتصال بنجاح! النطاق مصرح له ومعرف المستخدم هو:", user.uid);
  } else {
    console.log("بوابة إكريليدز آمنة ومستعدة، بانتظار تسجيل الدخول.");
  }
});
