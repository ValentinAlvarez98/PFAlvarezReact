import { useState, useContext } from "react";
import { Container } from "@mui/material";
import CartNavbar from "./CartNavbar/CartNavbar.jsx";
import CartItemInfo from "./CartItemInfo/CartItemInfo.jsx";
import CartItems from "./CartItems/CartItems.jsx";
import { CartContext } from "../../context/cartContext.jsx";
import CartResume from "./CartResume/CartResume.jsx";
import UserData from "../UserData/UserData.jsx";
import CheckOut from "../CheckOut/CheckOut.jsx";

// Se crea el componente Cart que contiene el carrito de compras
const Cart = () => {
    // Se define el estado para controlar si se debe mostrar PersData
    const [showUserData, setShowUserData] = useState(false);

    const [showCheckOut, setShowCheckOut] = useState(false);

    // Se obtienen los datos del contexto
    const { totalPrice } = useContext(CartContext);

    // Función para cambiar el estado de showPersData
    const handleShowUserData = () => {
        setShowUserData(true);
    };

    const handleShowCheckOut = () => {
        setShowCheckOut(true);
    };

    const handleHideUserData = () => {
        setShowUserData(false);
    };

    const handleHideCheckOut = () => {
        setShowCheckOut(false);
    };

    return (
        <>
            {/* Se renderiza el componente CartNavbar */}
            <CartNavbar
                onShowUserData={handleShowUserData}
                onHiddenUserData={handleHideUserData}
                onShowCheckOut={handleShowCheckOut}
                onHiddenCheckOut={handleHideCheckOut}
            />

            {/* Se renderiza el componente UserData o CheckOut o Cart */}
            {showUserData ? <UserData /> : showCheckOut ? <CheckOut /> :
                (
                    <Container
                        maxWidth="lg"
                        className="fullSize"
                        sx={{
                            marginTop: "4rem",
                            boxShadow: "5px 6px 10px 0px #8b9198",
                        }}
                    >
                        {/* Se renderiza el componente CartItemInfo */}
                        <CartItemInfo />

                        {/* Se renderiza el componente CartItems */}
                        <CartItems />

                        {/* Se renderiza el componente CartResume */}
                        <CartResume totalPrice={totalPrice} />
                    </Container>
                )}
        </>
    );
};

export default Cart;



