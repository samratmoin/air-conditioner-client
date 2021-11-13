import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import MyOrders from "../MyOrders/MyOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import Payment from "../Payment/Payment";
import UserReview from "../../Cart/UserReview/UserReview";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, admin, logOut } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <NavLink style={{ textDecoration: "none" }} to="/">
        <Button color="inherit">Home</Button>
      </NavLink>

      {user.email && !admin && (
        <Box>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/myOrders`}>
            <Button color="inherit">My Orders</Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/payment`}>
            <Button color="inherit">Payment</Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/addReview`}>
            <Button color="inherit">Review</Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          </NavLink>
        </Box>
      )}

      {admin && (
        <Box>
          <NavLink style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </NavLink>

          <NavLink
            style={{ textDecoration: "none" }}
            to={`${url}/manageAllOrders`}
          >
            <Button color="inherit">Manage All Orders</Button>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to={`${url}/addProducts`}>
            <Button color="inherit">Add Products</Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          </NavLink>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
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
            keepMounted: true, // Better open performance on mobile.
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders>s</ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addProducts`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/addReview`}>
            <UserReview></UserReview>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
