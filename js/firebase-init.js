// السطر 1: استيراد المكتبات من خوادم جوجل
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// إعدادات الاتصال بمنصتك إكريليدز
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // !!! ضع هنا الـ API Key الخاص بمشروعك
  authDomain: "ekrilidz-af404.firebaseapp.com", 
  projectId: "ekrilidz-af404", 
  storageBucket: "ekrilidz-af404.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID", // !!! ضع رقم المرسل الخاص بك إن وجد
  appId: "YOUR_APP_ID" // !!! ضع معرف التطبيق الخاص بك هنا
};

// تشغيل وتهيئة النظام
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// فحص أمان النطاق وحالة حساب المستخدم
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("تم الاتصال بنجاح! معرف المستخدم الحالي:", user.uid);
  } else {
    console.log("بوابة إكريليدز آمنة ومستعدة، في انتظار تسجيل الدخول.");
  }
});
