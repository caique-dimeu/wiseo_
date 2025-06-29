import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk4VgE1BrES2sHuhbIjNxKAOFFIX4_UME",
  authDomain: "wiseo-71742.firebaseapp.com",
  projectId: "wiseo-71742",
  storageBucket: "wiseo-71742.firebasestorage.app",
  messagingSenderId: "81572047521",
  appId: "1:81572047521:android:ad043cbb7a447198c65ee0",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
