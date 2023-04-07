import { Button, ButtonGroup } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext.jsx";


const ItemCount = ({ prod }) => {

    const { sumarCantidad, restarCantidad, actualizarCantidadProducto } = useContext(CartContext);

    const handleRestarCantidad = () => {

        const newQuantity = prod.quantity - 1;
        const newStock = prod.stock + 1;
        restarCantidad(prod.id);
        actualizarCantidadProducto(prod.id, newQuantity, newStock);

    };

    const handleSumarCantidad = () => {

        const newQuantity = prod.quantity + 1;
        const newStock = prod.stock - 1;
        sumarCantidad(prod.id);
        actualizarCantidadProducto(prod.id, newQuantity, newStock);

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