
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC5TWYBKeTp0BC_f0Xmft30IuiFwzLC828",
    authDomain: "loyola-wau.firebaseapp.com",
    projectId: "loyola-wau",
    storageBucket: "loyola-wau.appspot.com",
    messagingSenderId: "846774911032",
    appId: "1:846774911032:web:4bc5513e2e8cad210926cd",
    measurementId: "G-TL21FNMSC0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);