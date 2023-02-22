import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { HeaderWithTheme } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <HeaderWithTheme />
      <ItemListContainer greeting="Bienvenido a Bunker PhoneShop" />
    </div>
  );
}

export default App;
