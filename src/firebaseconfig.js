import { initializeApp } from '@firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBy1BJmCSHhl_33NCE2YwZjPsc-4WtWjhI",
    authDomain: "notes-f121c.firebaseapp.com",
    databaseURL: "https://notes-f121c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "notes-f121c",
    storageBucket: "notes-f121c.appspot.com",
    messagingSenderId: "898324619306",
    appId: "1:898324619306:web:da4ac6cd22230c83996353",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);