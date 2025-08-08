import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlSbjplrxwHxat73_zUhbxyf8hdvSrhxU",
  authDomain: "isla-clara.firebaseapp.com",
  projectId: "isla-clara",
  storageBucket: "isla-clara.firebasestorage.app",
  messagingSenderId: "545677070495",
  appId: "1:545677070495:web:a372a5ef129db7abd892aa"
};

export const app = initializeApp(firebaseConfig);