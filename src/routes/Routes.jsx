import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext.jsx";
import LoginScreen from "../components/LoginScreen/LoginScreen.jsx";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import UserData from "../components/UserData/UserData.jsx";
import Cart from "../components/Cart/Cart";
import { Navigate } from "react-router-dom";

{ /* Se exporta el componente AppRoutes, el cual se encarga de manejar las rutas de la aplicación. */ }
export default function AppRoutes() {

    { /* Se obtiene el estado isLoggedIn del contexto. */ }
    const { isLoggedIn } = useContext(LoginContext);

    return (
        <Routes>

            { /* Se crean las rutas de la aplicación en función del estado isLoggedIn. */}
            {isLoggedIn ? (
                <>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/:sectionId" element={<ItemListContainer />} />
                    <Route path="/:sectionId/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<UserData />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<LoginScreen />} />
                </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}