import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9vpqhGOigOxeUNrkch98oq_DbsGcIpNU",
  authDomain: "netflix-react-app-d1338.firebaseapp.com",
  projectId: "netflix-react-app-d1338",
  storageBucket: "netflix-react-app-d1338.appspot.com",
  messagingSenderId: "690223366461",
  appId: "1:690223366461:web:bc2771ce4bf9d5d31e8554",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
