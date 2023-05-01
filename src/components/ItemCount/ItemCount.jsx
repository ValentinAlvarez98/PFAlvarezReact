import { Button, ButtonGroup } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext.jsx";


{/* Se crea el componente ItemCount, el cual se encarga de mostrar el contador de productos en el componente ItemDetail. */ }
const ItemCount = ({ prod }) => {

    { /* Se obtienen las funciones del contexto. */ }
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleRestarCantidad = () => {
        decreaseQuantity(prod.id);
    };

    const handleSumarCantidad = () => {
        increaseQuantity(prod.id);
    };

    {/* Se retorna el componente ItemCount. */ }
    return (

        <ButtonGroup variant="outlined">

            <Button onClick={handleRestarCantidad} disabled={prod.quantity === 1}>
                -
            </Button>

            <Button>
                {prod.quantity}
            </Button>

            <Button onClick={handleSumarCantidad} disabled={prod.stock === 0}>
                +
            </Button>
        </ButtonGroup>

    );
};

export default ItemCount;