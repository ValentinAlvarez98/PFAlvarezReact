import Slider from "../Slider/Slider.jsx";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Slider />
      <Container className="container" maxWidth="lg">
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            color: (theme) => theme.palette.primary.dark,
            fontWeight: "bold",
            fontSize: "1.5rem",
            margin: "1rem",
          }}
        >
          {greeting}
        </Typography>
      </Container>
    </>
  );
};

export default ItemListContainer;
