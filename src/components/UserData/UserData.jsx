import React, { useState, useContext, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import PersData from './PersData/PersData';
import ShippData from './ShippData/ShippData';
import { LoginContext } from '../../context/loginContext';

{ /* Se crea el componente UserData, el cual se encarga de mostrar el formulario de datos del usuario. */ }
const UserData = () => {

    { /* Se obtienen las funciones del contexto. */ }
    const { auth } = useContext(LoginContext);

    { /* Se crea la constante localStorageKey, la cual se encarga de almacenar la key del localStorage. */ }
    const localStorageKey = `userData_${auth.currentUser.uid}`;

    { /* Se crea la función saveUserDataToLocalStorage, la cual se encarga de guardar los datos del usuario en el localStorage. */ }
    const saveUserDataToLocalStorage = (userData) => {
        localStorage.setItem(localStorageKey, JSON.stringify(userData));
    };

    { /* Se crea el estado formData, el cual se encarga de almacenar los datos del formulario. */ }
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

    { /* Se crea la función handleSubmit, la cual se encarga de manejar el submit del formulario. */ }
    const handleSubmit = async (persData, shippData) => {

        { /* Se crea la constante newFormData, la cual se encarga de actualizar el estado formData. */ }
        const newFormData = {
            persData: persData ? { ...formData.persData, ...persData } : formData.persData,
            shippData: shippData ? { ...formData.shippData, ...shippData } : formData.shippData,
        };

        setFormData(newFormData);

        { /* Se crea la constante userDocRef, la cual se encarga de obtener la referencia del documento del usuario. */ }
        const userDocRef = doc(db, 'users', auth.currentUser.uid);

        try {

            await setDoc(
                userDocRef,
                newFormData,
                { merge: true }
            );

            saveUserDataToLocalStorage(newFormData);

        } catch (error) {
            console.log('Error al guardar los datos del usuario en Firestore', error);
        }

    };

    const userDataFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

    { /* Se retorna el componente UserData. */ }
    return (
        <div>
            <PersData
                onSubmit={handleSubmit}
                data={userDataFromLocalStorage?.persData}
            />
            <ShippData
                onSubmit={handleSubmit}
                data={userDataFromLocalStorage?.shippData}
            />
        </div>
    );
};

export default UserData;