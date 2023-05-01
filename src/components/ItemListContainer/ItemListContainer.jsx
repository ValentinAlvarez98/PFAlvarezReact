import { useState, useEffect } from "react";
import { pedirProductos } from "../../helpers/pedirDatos.js"
import ItemList from "./ItemList/ItemList.jsx";
import Sliders from "../Sliders/Sliders.jsx";
import { useParams } from "react-router-dom";

{/* Se crea el componente ItemListContainer, el cual se encarga de mostrar una lista de productos. */ }
const ItemListContainer = () => {

  {/* Se crean los estados productos y loading. */ }
  const { sectionId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  {/* Se obtienen los productos. */ }
  useEffect(() => {
    setLoading(true);

    pedirProductos()
      .then((response) => {
        if (!sectionId) {
          setProductos(response);
        } else {
          setProductos(response.filter((prod) => prod.section === sectionId));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sectionId]);

  {/* Se retorna el componente ItemListContainer. */ }
  return (
    <>
      <Sliders />
      {loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}
    </>
  );
};

export default ItemListContainer;
