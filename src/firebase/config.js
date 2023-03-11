import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJdlSu_gsguolQ8PlOekDelSrMYrPjl_I",
  authDomain: "mia-jewelers.firebaseapp.com",
  projectId: "mia-jewelers",
  storageBucket: "mia-jewelers.appspot.com",
  messagingSenderId: "968655933848",
  appId: "1:968655933848:web:f19adf2fbca6b0e3d8dbed",
};

const app = initializeApp(firebaseConfig);

export const initiFirebase = () => app;
