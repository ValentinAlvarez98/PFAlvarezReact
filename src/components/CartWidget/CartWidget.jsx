import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProviderCustom } from "../../theme/Theme.jsx";

const CartWidget = () => {
  return (
    <ThemeProviderCustom>
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
            badgeContent={2}
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
    </ThemeProviderCustom>
  );
};

export default CartWidget;
