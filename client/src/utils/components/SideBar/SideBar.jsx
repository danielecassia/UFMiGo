
import { Menu as MenuIcon } from "@mui/icons-material";

import {
  AppBar,
  Box,
  Container,
  Drawer as MuiDrawer,
  IconButton,
  Toolbar,
  useTheme,
  Paper
} from "@mui/material";

import {
  useState
} from "react";

import { Outlet } from "react-router-dom";

import { Drawer } from "./Drawer";


const drawerWidth = 240;


export function SideBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleIsDrawerOpen = () =>
    setIsDrawerOpen(!isDrawerOpen);

  const { palette } = useTheme();


  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        width:1,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
          bgcolor: {sm:palette.primary.main,md:palette.background.default},
            color: 'secondary'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleIsDrawerOpen}
            sx={{ 
              mr: 2, display: { sm: "none" }
            }}
            style={{
              color: palette.primary.light,
              backgroundColor: palette.primary.main,
              marginLeft: 12,
              borderRadius: 10, padding: 5
            }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: {
            sm: drawerWidth
          },
          flexShrink: { sm: 0 },
        }}
      >
        <MuiDrawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={toggleIsDrawerOpen}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          <Drawer />
        </MuiDrawer>

        <MuiDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: 'black',
          }}
          open
        >
          <Drawer />
        </MuiDrawer>
      </Box>

      <Box
        component="main"
        sx={{
          // flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: "92%",
          // bgcolor:'red',
          width:1,
          marginTop: 6,
          paddingY: 2
        }}
      >
        <Paper
          sx={{ padding: 2, minHeight: '75vh' }}
        >
          <Outlet />
        </Paper>
      </Box>
    </Container>
  );

}