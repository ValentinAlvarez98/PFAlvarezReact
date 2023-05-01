import { Button, ButtonGroup } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext.jsx";


const ItemCount = ({ prod }) => {

    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleRestarCantidad = () => {

        decreaseQuantity(prod.id);

    };

    const handleSumarCantidad = () => {

        increaseQuantity(prod.id);

    };

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