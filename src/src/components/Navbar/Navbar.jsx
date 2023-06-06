import PropTypes from "prop-types";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import woppLogo from "@/assets/logo.svg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Navbar = ({ drawerWidth, handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "bluedark",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        style={{
          display: "flex",
        }}
        sx={{
          justifyContent: { sm: "space-between" },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <img
          className="animate__animated animate__zoomInUp"
          src={woppLogo}
          alt="Logo Wopp"
          style={{ width: 150 }}
        />
        <Box sx={{ display: { xs: "none", sm: "flex" }, columnGap: 3 }}>
          <Button sx={{ color: "#fff", textTransform: "none", fontSize: 16 }}>
            Kubo Developers
          </Button>
          <Button
            startIcon={<PowerSettingsNewIcon />}
            sx={{ color: "#fff", textTransform: "none", fontSize: 16 }}
          >
            Cerrar Sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Navbar;
