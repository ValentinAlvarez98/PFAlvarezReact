import { Box } from "@mui/material";
const FlipperImg = ({ item, size }) => {


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