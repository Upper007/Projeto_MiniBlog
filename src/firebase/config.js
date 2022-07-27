import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBg7gBrTyunF8CpND0DxD1QxpHbVBSKedg",
    authDomain: "miniblog-7487c.firebaseapp.com",
    projectId: "miniblog-7487c",
    storageBucket: "miniblog-7487c.appspot.com",
    messagingSenderId: "882851773204",
    appId: "1:882851773204:web:086cbd11cd984cb267e001"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };