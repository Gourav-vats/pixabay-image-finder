import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
   return (
      <AppBar position="static" color="primary">
         <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
               <MenuIcon />
            </IconButton>
            <Typography variant="h6">PixaBay Image Finder</Typography>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;
