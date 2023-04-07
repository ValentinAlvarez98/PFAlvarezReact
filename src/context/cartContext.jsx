import { createContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item) => {
        const productoEnCarrito = cart.find((prod) => prod.id === item.id);

        if (!productoEnCarrito && item.stock > 0) {
            setCart([...cart, { ...item, quantity: + 1, stock: item.stock - 1 }]);
        } else if (productoEnCarrito && productoEnCarrito.stock > 0 && productoEnCarrito.quantity < productoEnCarrito.stock) {
            const updatedCart = cart.map((prod) =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + 1, stock: prod.stock - 1 } : prod
            );
            setCart(updatedCart);
        }
    };


    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const actualizarCantidadProducto = (id, quantity, stock) => {
        const updatedCart = cart.map((prod) => {
            if (prod.id === id) {
                return {
                    ...prod,
                    quantity: quantity,
                    stock: stock
                };
            }
            return prod;
        });
        setCart(updatedCart);
    };

    const restarCantidad = (id) => {
        const prod = cart.find((prod) => prod.id === id);
        if (prod.quantity > 1 && prod.stock < prod.initialStock) {
            prod.quantity--;
            prod.stock++;
            actualizarCantidadProducto(id, prod.quantity, prod.stock);
        }
    };

    const sumarCantidad = (id) => {
        const prod = cart.find((prod) => prod.id === id);
        if (prod.quantity < prod.initialStock && prod.stock > 0) {
            prod.quantity++;
            prod.stock--;
            actualizarCantidadProducto(id, prod.quantity, prod.stock);
        }
    };

    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const totalPrecio = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    return (

        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalPrecio,
            vaciarCarrito,
            eliminarDelCarrito,
            sumarCantidad,
            restarCantidad,
            actualizarCantidadProducto,
        }}>
            {children}
        </CartContext.Provider>

    );

};
