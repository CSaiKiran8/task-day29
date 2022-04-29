import * as React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Edit } from "./Edit";
import { AddUser } from "./AddUser";
import { View } from "./View";
import { Profile } from "./Profile";
import { NotFound } from "./NotFound";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import FaceIcon from "@mui/icons-material/Face";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//Sidebar component
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  //created an array for Sidebar elements
  const elements = [
    { title: "Dashboard", icon: <FaceIcon color="error" />, path: "/" },
    {
      title: "Add User",
      icon: <PersonAddAltIcon color="error" />,
      path: "/adduser",
    },
    {
      title: "Profile",
      icon: <RecentActorsIcon color="error" />,
      path: "/profile/:id",
    },
  ];

  //addUsers to add users to users state
  const addUsers = (field) => {
    setUsers([...users, field]);
  };

  //update to update the user
  const update = (user, id) => {
    const index = users.findIndex((user) => user.Empid === id);
    var tempuserss = [...users];
    tempuserss[index] = user;
    setUsers(tempuserss);
  };

  //delUser to delete the user
  const delUser = (user, id) => {
    setUsers(users.filter((user) => user.Empid !== id));
  };
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ bgcolor: "error.main", color: "text.inherit" }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Userlist
          </Typography>
        </Toolbar>
      </AppBar >
      <Drawer variant="permanent" open={open} >
      <div className='drow'>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon color='primary'/>
            ) : (
              <ChevronLeftIcon color='primary'/>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {elements.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link to={item.path}>{item.icon}</Link>
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
        </div>
      </Drawer>
      <Box component="main" className="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
        <Typography>
          {/* Routing other components */}
          <Routes>
            <Route
              exact
              path="/"
              element={<Home users={users} delUser={delUser} />}
            />
            <Route
              exact
              path="/adduser"
              element={<AddUser addUsers={addUsers} />}
            />
            <Route
              exact
              path="/profile/:id"
              element={<Profile users={users} delUser={delUser} />}
            />
            <Route
              exact
              path="/edit/:id"
              element={<Edit users={users} update={update} />}
            />
            <Route exact path="/view/:id" element={<View users={users} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Typography>
      </Box>
    </Box>
  );
}