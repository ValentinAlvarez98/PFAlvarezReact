import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBng6pTM4yi3vIfP5H3cTLXqiw5ppgRPzQ",
    authDomain: "bunkerphoneshop.firebaseapp.com",
    projectId: "bunkerphoneshop",
    storageBucket: "bunkerphoneshop.appspot.com",
    messagingSenderId: "910752803786",
    appId: "1:910752803786:web:b51e17123db49733acfd33",
    measurementId: "G-B8JKX5MRPS"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

