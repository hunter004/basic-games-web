import * as React from "react";
import {AppBar,Box,Toolbar,IconButton,Typography,Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const GameMenu = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" variant='elevated' sx={{backgroundColor:'#14d0e0'}}>
      <Toolbar>
        <IconButton 
          size="large" 
          edge="start" 
          color="#050505"
          aria-label="menu"
          sx={{mr:2}}
          >
            <MenuIcon />
          </IconButton>
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