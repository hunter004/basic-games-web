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
          color="inherit"
          aria-label="menu"
          sx={{mr:2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="H5" component="div" sx={{flexGrow: 1}}>
            GAMES GAMES GAMES
          </Typography>
          <Button color="inherit">Login</Button>
      </Toolbar>
      </AppBar>
    </Box>
  )
}

export default GameMenu;