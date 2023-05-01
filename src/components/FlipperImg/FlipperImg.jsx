import { Box } from "@mui/material";

{/* Se crea el componente FlipperImg, el cual se encarga de mostrar las imágenes de los productos en el componente Flipper. */ }
const FlipperImg = ({ item, size }) => {


    {/* Se retorna el componente FlipperImg. */ }
    return (
        <Box className="flipper-image-container" style={{ width: size, height: size }}>
            <img
                width={size}
                height={size}
                src={item.picturesUrl.primary}
                alt={item.name}
                className="flipper-image"

            />
            <img
                width={size}
                height={size}
                src={item.picturesUrl.secondary}
                alt={item.name}
                className="flipper-image-secondary"
            />
        </Box >
    );
};

export default FlipperImg;