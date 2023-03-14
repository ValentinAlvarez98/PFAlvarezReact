import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { NavBar1, NavBar2 } from "./components/NavBars/NavBars";
import { HeaderWithTheme } from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <BrowserRouter>

      <HeaderWithTheme />

      <NavBar1 />
      <NavBar2 />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:sectionId" element={<ItemListContainer />} />
        <Route path="/:sectionId/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
