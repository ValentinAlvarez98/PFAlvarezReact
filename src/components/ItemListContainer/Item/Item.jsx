import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FlipperImg from "../../FlipperImg/FlipperImg";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";


{/* Se crea el componente Item, el cual se encarga de mostrar un producto en el componente ItemList. */ }
const Item = ({ item }) => {

    {/* Se obtienen las funciones del contexto. */ }
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(item);
    };

    {/* Se retorna el componente Item. */ }
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1rem',
            }}
            key={item.id}
        >
            <FlipperImg item={item} size={300} />
            <Typography
                className='semiBold'
                variant="body2"
                sx={{
                    color: (theme) => theme.palette.secondary.main,
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem',
                    height: '40px',
                }}
            >
                {item.name}
            </Typography>
            <Typography
                className="regular"
                variant="body2"
                sx={{
                    color: (theme) => theme.palette.info.light,
                    textAlign: 'center',
                    fontSize: '1.15rem',
                    marginBottom: '1rem',
                }}
            >
                USD {item.price.toFixed(2)}
            </Typography>
            <Link to={`/${item.category}/${item.id}`}
                style={{
                    textDecoration: "none",
                    color: "#323232",
                }}
            >

                <Button className='regular' variant="contained" sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.primary.contrastText,
                    width: '200px',
                    height: "30px",
                    borderRadius: '0.8rem',
                    fontWeight: 'regular',
                    fontSize: '0.9rem',
                    mt: '1.5rem'
                }}>
                    Ver detalles
                </Button>

            </Link>
            <Button
                onClick={handleAddToCart}
                className='semiBold'
                variant="contained"
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.primary.contrastText,
                    width: '200px',
                    height: "30px",
                    borderRadius: '0.1rem',
                    marginTop: '1rem',
                    fontWeight: 'regular',
                    fontSize: '0.9rem',
                }}>
                Agregar al carrito
            </Button>
        </Box>
    )
}

export default Item;