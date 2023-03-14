import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { pedirProductoPorId } from "../../helpers/pedirDatos"
import ItemDetail from "./ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        pedirProductoPorId(Number(itemId))
            .then((response) => {
                setItem(response)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("Fin de la peticion")
                setLoading(false)
            })
    }, [])

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
