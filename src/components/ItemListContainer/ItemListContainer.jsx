import { useState, useEffect } from "react";
import { pedirProductos } from "../../helpers/pedirDatos.js"
import ItemList from "./ItemList/ItemList.jsx";
import Slider from "../Slider/Slider.jsx";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

  const { sectionId } = useParams();

  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true);

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
        console.log("Fin de la peticion");
        setLoading(false);
      });

  }, [sectionId]);

  return (
    <>

      <Slider />

      {loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}

    </>
  );
};

export default ItemListContainer;
