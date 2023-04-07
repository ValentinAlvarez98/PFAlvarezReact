import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext.jsx";
import { Link } from "react-router-dom";

// Se crea el componente CartWidget
const CartWidget = () => {

  // Se obtienen los datos del contexto
  const { totalCantidad } = useContext(CartContext);

  return (

    <Link to="/cart">

      <MenuItem
        sx={{
          background: (theme) => theme.palette.primary.main,
          "&:hover": {
            background: (theme) => theme.palette.primary.main,
          },
        }}
      >

        <IconButton
          aria-label="cart"
          sx={{
            "&:hover": {
              "& .MuiBadge-badge": {
                opacity: 0,
                transition: "0.5s",
                transform: "scale(0.6)",
              },
              background: (theme) => theme.palette.primary.dark,
              transition: "0.3s",
              transform: "scale(1.05)",
            },
          }}
        >

          <Badge
            badgeContent={totalCantidad() > 0 ? totalCantidad() : "0"}
            sx={{
              "& .MuiBadge-badge": {
                background: (theme) => theme.palette.info.main,
                color: "white",
              },
            }}
          >

            <ShoppingBagOutlinedIcon sx={{ color: "white" }} />

          </Badge>

        </IconButton>

      </MenuItem>

    </Link>

  );
};

export default CartWidget;
