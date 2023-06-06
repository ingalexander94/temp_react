import { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const drawerWidth = 280;

const PrivateRouter = ({ isAuth, children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const wrapper = (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: 10,
          px: 10,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );

  return isAuth ? wrapper : <Navigate to="/" />;
};

PrivateRouter.propTypes = {
  isAuth: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default PrivateRouter;
