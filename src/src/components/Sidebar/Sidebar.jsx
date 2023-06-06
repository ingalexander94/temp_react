import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { menuItems } from "@/data/menu";
import { NavLink } from "react-router-dom";

const Sidebar = ({ window, drawerWidth, mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <Box sx={{ padding: "150px 0px 0px 20px" }}>Menú</Box>
      <List>
        {menuItems.map(({ name, icon, active, route }, index) => (
          <ListItem key={index}>
            <NavLink
              to={route}
              onClick={handleDrawerToggle}
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "var(--primary-color)"
                    : "var(--text-color)",
                  textDecoration: "none",
                  width: "100%",
                };
              }}
            >
              {({ isActive }) => (
                <ListItemButton style={{ padding: "10px" }}>
                  <ListItemIcon>
                    <img
                      style={{
                        width: name === "Planes" ? 25 : 20,
                        height: name === "Planes" ? 25 : 20,
                      }}
                      src={isActive ? active : icon}
                      alt={`icono de ${name}`}
                    />
                  </ListItemIcon>
                  <ListItemText primary={name} style={{ fontSize: 24 }} />
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Sidebar;
