import { createContext, useState, useEffect, useContext } from "react";
import { collection, doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.jsx";
import { LoginContext } from './loginContext';


{ /* Se crea la constante cartContext, la cual se encarga de crear el contexto del carrito. */ }
export const CartContext = createContext();


{ /* Se crea el componente CartContextProvider, el cual se encarga de proveer el contexto del carrito. */ }
const CartContextProvider = (props) => {

    const { auth } = useContext(LoginContext);

    { /* Se crea el estado cart, el cual se encarga de almacenar los productos del carrito. */ }
    const [cart, setCart] = useState([]);
    { /* Se crea el estado totalPrice, el cual se encarga de almacenar el precio total del carrito. */ }
    const [totalPrice, setTotalPrice] = useState(0);
    { /* Se crea el estado totalQuantity, el cual se encarga de almacenar la cantidad total de productos del carrito. */ }
    const [totalQuantity, setTotalQuantity] = useState(0);

    { /* Se crea la constante currentUser, la cual se encarga de almacenar el usuario actual. */ }
    const currentUser = auth.currentUser;

    { /* Se crea el efecto useEffect, el cual se encarga de obtener los datos del carrito del usuario actual. */ }
    useEffect(() => {
        if (currentUser) {
            const cartRef = doc(db, "cart", currentUser.uid);
            getDoc(cartRef).then((docSnap) => {
                if (docSnap.exists()) {
                    setCart(docSnap.data().cartItems);
                    setTotalPrice(docSnap.data().totalPrice);
                    setTotalQuantity(docSnap.data().totalQuantity);
                } else {
                    setCart([]);
                    setTotalPrice(0);
                    setTotalQuantity(0);
                }
            });
        } else {
            setCart([]);
            setTotalPrice(0);
            setTotalQuantity(0);
        }
    }, [currentUser]);

    { /* Se crea la función addToCart, la cual se encarga de agregar un producto al carrito. */ }
    const addToCart = async (product) => {

        { /* Se verifica si el usuario está autenticado. */ }
        if (currentUser) {

            { /* Se crea la constante cartRef, la cual se encarga de obtener la referencia del documento del carrito del usuario actual. */ }
            const cartRef = doc(db, "cart", currentUser.uid);

            { /* Se crea la constante cartDoc, la cual se encarga de obtener el documento del carrito del usuario actual. */ }
            const cartDoc = await getDoc(cartRef);

            { /* Se crea la constante productIndex, la cual se encarga de obtener el índice del producto en el carrito. */ }
            const productIndex = cart.findIndex((item) => item.id === product.id);

            { /* Se verifica si el producto ya está en el carrito. */ }
            if (productIndex >= 0) {

                { /* Se crea la constante updatedCart, la cual se encarga de almacenar el carrito actualizado. */ }
                const updatedCart = [...cart];

                { /* Se actualiza la cantidad del producto en el carrito. */ }
                updatedCart[productIndex].quantity += 1;

                { /* Se actualiza el carrito. */ }
                setCart(updatedCart);

                { /* Se actualiza el precio total del carrito. */ }
                setTotalPrice(totalPrice + product.price);

                { /* Se actualiza la cantidad total de productos del carrito. */ }
                setTotalQuantity(totalQuantity + 1);

                { /* Se actualiza el carrito en la base de datos. */ }
                await updateDoc(cartRef, {
                    cartItems: updatedCart,
                    totalPrice: totalPrice + product.price,
                    totalQuantity: totalQuantity + 1,
                });

            } else {

                { /* Se crea la constante newCartItem, la cual se encarga de almacenar el nuevo producto del carrito. */ }
                const newCartItem = {
                    id: product.id,
                    brand: product.brand,
                    color: product.color,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    picturesUrl: {
                        primary: product.picturesUrl.primary,
                        secondary: product.picturesUrl.secondary
                    }
                };

                { /* Se actualiza el carrito. */ }
                const updatedCart = [...cart, newCartItem];
                setCart(updatedCart);

                { /* Se actualiza el precio total del carrito. */ }
                setTotalPrice(totalPrice + product.price);

                { /* Se actualiza la cantidad total de productos del carrito. */ }
                setTotalQuantity(totalQuantity + 1);

                { /* Se actualiza el carrito en la base de datos. */ }
                if (cartDoc.exists()) {
                    await updateDoc(cartRef, {
                        cartItems: updatedCart,
                        totalPrice: totalPrice + product.price,
                        totalQuantity: totalQuantity + 1,
                    });
                } else {
                    await setDoc(cartRef, {
                        cartItems: updatedCart,
                        totalPrice: totalPrice + product.price,
                        totalQuantity: totalQuantity + 1,
                    });
                }
            }
        }
    };


    { /* Se crea la función removeFromCart, la cual se encarga de eliminar un producto del carrito. */ }
    const removeFromCart = async (productId) => {


        if (currentUser) {

            { /* Se crea la constante cartRef, la cual se encarga de obtener la referencia del documento del carrito del usuario actual. */ }
            const cartRef = doc(db, "cart", currentUser.uid);

            { /* Se crea la constante productIndex, la cual se encarga de obtener el índice del producto en el carrito. */ }
            const productIndex = cart.findIndex((item) => item.id === productId);

            { /* Se verifica si el producto está en el carrito. */ }
            if (productIndex >= 0) {

                const updatedCart = [...cart];

                { /* Se crea la constante productToRemove, la cual se encarga de almacenar el producto a eliminar. */ }
                const productToRemove = updatedCart[productIndex];

                {/* Se actualiza el carrito eliminando el producto. */ }
                updatedCart.splice(productIndex, 1);
                setCart(updatedCart);

                { /* Se actualiza el precio total del carrito. */ }
                setTotalPrice(totalPrice - productToRemove.price * productToRemove.quantity);

                { /* Se actualiza la cantidad total de productos del carrito. */ }
                setTotalQuantity(totalQuantity - productToRemove.quantity);

                { /* Se actualiza el carrito en la base de datos. */ }
                await updateDoc(cartRef, {
                    cartItems: updatedCart,
                    totalPrice: totalPrice - productToRemove.price * productToRemove.quantity,
                    totalQuantity: totalQuantity - productToRemove.quantity,
                });
            }
        }
    };

    { /* Se crea la función increaseQuantity, la cual se encarga de aumentar la cantidad de un producto en el carrito. */ }
    const increaseQuantity = async (productId) => {

        if (currentUser) {
            const cartRef = doc(db, "cart", currentUser.uid);
            const productIndex = cart.findIndex((item) => item.id === productId);

            if (productIndex >= 0) {
                const updatedCart = [...cart];
                updatedCart[productIndex].quantity += 1;
                setCart(updatedCart);
                setTotalPrice(totalPrice + updatedCart[productIndex].price);
                setTotalQuantity(totalQuantity + 1);

                await updateDoc(cartRef, {
                    cartItems: updatedCart,
                    totalPrice: totalPrice + updatedCart[productIndex].price,
                    totalQuantity: totalQuantity + 1,
                });
            }
        }
    };

    { /* Se crea la función decreaseQuantity, la cual se encarga de disminuir la cantidad de un producto en el carrito. */ }
    const decreaseQuantity = async (productId) => {
        if (currentUser) {
            const cartRef = doc(db, "cart", currentUser.uid);
            const productIndex = cart.findIndex((item) => item.id === productId);

            if (productIndex >= 0) {
                const updatedCart = [...cart];
                updatedCart[productIndex].quantity -= 1;
                setCart(updatedCart);
                setTotalPrice(totalPrice - updatedCart[productIndex].price);
                setTotalQuantity(totalQuantity - 1);

                await updateDoc(cartRef, {
                    cartItems: updatedCart,
                    totalPrice: totalPrice - updatedCart[productIndex].price,
                    totalQuantity: totalQuantity - 1,
                });
            }
        }
    };



    { /* Se retorna el contexto del carrito. */ }
    return (
        <CartContext.Provider value={{
            cart,
            totalPrice,
            totalQuantity,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity
        }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;



