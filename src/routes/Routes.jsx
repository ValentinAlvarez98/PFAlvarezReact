import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext.jsx";
import LoginScreen from "../components/LoginScreen/LoginScreen.jsx";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import UserData from "../components/UserData/UserData.jsx";
import Cart from "../components/Cart/Cart";
import { Navigate } from "react-router-dom";

export default function AppRoutes() {
    const { isLoggedIn } = useContext(LoginContext);

    return (
        <Routes>
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