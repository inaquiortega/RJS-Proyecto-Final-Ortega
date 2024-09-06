import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjdVCiIfggoancrlWmFggR1OiPUGg6zk0",
  authDomain: "quemonoecommerce.firebaseapp.com",
  projectId: "quemonoecommerce",
  storageBucket: "quemonoecommerce.appspot.com",
  messagingSenderId: "770573503038",
  appId: "1:770573503038:web:af444e43838782881e5f6f",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
