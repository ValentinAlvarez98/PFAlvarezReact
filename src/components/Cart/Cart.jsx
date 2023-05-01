import { useState, useContext } from "react";
import { Container } from "@mui/material";
import CartNavbar from "./CartNavbar/CartNavbar.jsx";
import CartItemInfo from "./CartItemInfo/CartItemInfo.jsx";
import CartItems from "./CartItems/CartItems.jsx";
import { CartContext } from "../../context/cartContext.jsx";
import CartResume from "./CartResume/CartResume.jsx";
import UserData from "../UserData/UserData.jsx";
import PaymentData from "../UserData/PaymentData/PaymentData.jsx";

// Se crea el componente Cart que contiene el carrito de compras
const Cart = () => {
    // Se define el estado para controlar si se debe mostrar PersData
    const [showUserData, setShowUserData] = useState(false);

    const [showPaymentData, setShowPaymentData] = useState(false);

    // Se obtienen los datos del contexto
    const { totalPrice } = useContext(CartContext);

    // Función para cambiar el estado de showPersData
    const handleShowUserData = () => {
        setShowUserData(true);
    };

    const handleShowPaymentData = () => {
        setShowPaymentData(true);
    };

    const handleHideUserData = () => {
        setShowUserData(false);
    };

    const handleHidePaymentData = () => {
        setShowPaymentData(false);
    };

    return (
        <>
            {/* Se renderiza el navbar del carrito y se pasa la función handleShowPersData */}
            <CartNavbar
                onShowUserData={handleShowUserData}
                onHiddenUserData={handleHideUserData}
                onShowPaymentData={handleShowPaymentData}
                onHiddenPaymentData={handleHidePaymentData}
            />

            {/* Se crea un contenedor que ocupa todo el ancho de la pantalla */}
            {showUserData ? <UserData /> : showPaymentData ? <PaymentData /> :
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



