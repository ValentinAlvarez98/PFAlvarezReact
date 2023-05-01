import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { pedirProductoPorId } from "../../helpers/pedirDatos"
import ItemDetail from "./ItemDetail/ItemDetail"


{ /* Se crea el componente ItemDetailContainer, el cual se encarga de mostrar el detalle de un producto. */ }
const ItemDetailContainer = () => {

    { /* Se crean los estados item y loading. */ }
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    { /* Se obtiene el id del producto. */ }
    const { itemId } = useParams();

    { /* Se obtienen los datos del producto. */ }
    useEffect(() => {
        setLoading(true);

        pedirProductoPorId(itemId)
            .then((response) => {
                setItem(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    { /* Se retorna el componente ItemDetailContainer. */ }
    return (
        <div>
            {
                loading ?
                    <h2>Cargando...</h2> :
                    <ItemDetail item={item} />
            }
        </div>
    )
};

export default ItemDetailContainer;