import * as React from "react";
import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material';
import NavDrawer from './NavDrawer';

const GameMenu = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" variant='elevated' sx={{backgroundColor:'#14d0e0'}}>
      <Toolbar>
          <NavDrawer />
          <Typography variant="H5" component="div" sx={{flexGrow: 1,color:"#050505"}}>
            GAMES GAMES GAMES
          </Typography>
          <Button sx={{color:"#050505"}}>Login</Button>
      </Toolbar>
      </AppBar>
    </Box>
  )
}

export default GameMenu;