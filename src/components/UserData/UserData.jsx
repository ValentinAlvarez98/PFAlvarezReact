import React, { useState, useContext, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import PersData from './PersData/PersData';
import ShippData from './ShippData/ShippData';
import { LoginContext } from '../../context/loginContext';

const UserData = () => {
    const { auth } = useContext(LoginContext);

    const localStorageKey = `userData_${auth.currentUser.uid}`;

    const saveUserDataToLocalStorage = (userData) => {
        localStorage.setItem(localStorageKey, JSON.stringify(userData));
    };

    const [formData, setFormData] = useState({
        persData: {
            name: '',
            lastName: '',
            identification: '',
            cellphone: '',
            phone: '',
        },
        shippData: {
            address: '',
            apartment: '',
            location: '',
            region: '',
            areaCode: '',
        },
    });

    const handleSubmit = async (persData, shippData) => {
        const newFormData = {
            persData: persData ? { ...formData.persData, ...persData } : formData.persData,
            shippData: shippData ? { ...formData.shippData, ...shippData } : formData.shippData,
        };
        setFormData(newFormData);
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        try {
            await setDoc(userDocRef, newFormData, { merge: true });
            console.log('Datos del usuario guardados correctamente en Firestore');
            saveUserDataToLocalStorage(newFormData);
        } catch (error) {
            console.log('Error al guardar los datos del usuario en Firestore', error);
        }
    };

    const userDataFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

    return (
        <div>
            <PersData onSubmit={handleSubmit} data={userDataFromLocalStorage?.persData} />
            <ShippData onSubmit={handleSubmit} data={userDataFromLocalStorage?.shippData} />
        </div>
    );
};

export default UserData;