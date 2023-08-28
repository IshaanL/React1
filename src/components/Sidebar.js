import {Home,Create} from "@mui/icons-material";
import {Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";



  import React from 'react'
  
  export default function Sidebar() {

    

    

    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/Create">
              <ListItemIcon>
              <Create />
              </ListItemIcon>
              <ListItemText primary="Create user" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/Update">
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Update User" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
    
  }
  