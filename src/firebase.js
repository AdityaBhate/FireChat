import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBOVbPDIr0xkwJ5kJO-862sqbEplr27he0",
	authDomain: "react-firebase-chat-1e196.firebaseapp.com",
	projectId: "react-firebase-chat-1e196",
	storageBucket: "react-firebase-chat-1e196.appspot.com",
	messagingSenderId: "539406635032",
	appId: "1:539406635032:web:905ceee5a0363a6a90b36d",
	measurementId: "G-RBLEJ9ERBV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
