import React from 'react';
import {
  Box,
  Container,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme
} from "@mui/material";
import Image from "mui-image";
import { useNavigate } from "react-router-dom";
import { navbarData } from "./sideBarData";

import Logo from "../../../assets/logo.png";



export function Drawer() {

  // TODO: Fetch User Data
  const currentUser = {
    role: "admin",
    name: "User Name"
  };

  const navigate = useNavigate();
  const { palette } = useTheme();

  return (
    <Container
      style={{
        padding:0,
        height: '100%',
        backgroundColor: palette.primary.main
      }}
    >
      <Box
        style={{
          marginTop: 50,
          marginBottom: 30,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={Logo}
          duration={0}
          style={{
            width: 200,
            height: 66,
            marginBottom: 16
          }}
        />

      </Box>
      <List>
        {navbarData
          .filter(({ roles }) => roles.includes(currentUser.role))
          .map(({ path, title, Icon }, index) => (
            
            <ListItem
              key={index}
              onClick={() => navigate(path)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Icon 
                   sx={{
                    color: 'primary.light',
                    borderRadius: 2,
                    fontSize: 30}}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography 
                    sx={{
                      color: 'primary.light',
                    }}>
                    {title}
                  </Typography>
                </ListItemText>

              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Container>
  );
}