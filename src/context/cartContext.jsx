import { createContext, useState, useEffect, useContext } from "react";
import { collection, doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.jsx";
import { LoginContext } from './loginContext';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const { auth } = useContext(LoginContext);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const currentUser = auth.currentUser;

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

    const addToCart = async (product) => {
        if (currentUser) {
            const cartRef = doc(db, "cart", currentUser.uid);
            const cartDoc = await getDoc(cartRef);
            const productIndex = cart.findIndex((item) => item.id === product.id);

            if (productIndex >= 0) {
                const updatedCart = [...cart];
                updatedCart[productIndex].quantity += 1;
                setCart(updatedCart);
                setTotalPrice(totalPrice + product.price);
                setTotalQuantity(totalQuantity + 1);

                await updateDoc(cartRef, {
                    cartItems: updatedCart,
                    totalPrice: totalPrice + product.price,
                    totalQuantity: totalQuantity + 1,
                });
            } else {
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
                const updatedCart = [...cart, newCartItem];
                setCart(updatedCart);
                setTotalPrice(totalPrice + product.price);
                setTotalQuantity(totalQuantity + 1);

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
        } else {
            alert("Inicia sesión para agregar productos al carrito");
        }
    };

    const removeFromCart = async (productId) => {
        if (currentUser) {
            const cartRef = doc(db, "cart", currentUser.uid);
            const productIndex = cart.findIndex((item) => item.id === productId);

            if (productIndex >= 0) {
                const updatedCart = [...cart];
                const productToRemove = updatedCart[productIndex];
                updatedCart.splice(productIndex, 1);
                setCart(updatedCart);
                setTotalPrice(totalPrice - productToRemove.price * productToRemove.quantity);
                setTotalQuantity(totalQuantity - productToRemove.quantity);

                await updateDoc(cartRef, {
                    cartItems: updatedCart,
                    totalPrice: totalPrice - productToRemove.price * productToRemove.quantity,
                    totalQuantity: totalQuantity - productToRemove.quantity,
                });
            }
        } else {
            alert("Inicia sesión para eliminar productos del carrito");
        }
    };

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




    return (
        <CartContext.Provider value={{ cart, totalPrice, totalQuantity, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;



