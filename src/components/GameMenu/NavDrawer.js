import * as React from "react";
import {IconButton,Drawer,Divider,List,ListItemButton,
        ListItemIcon,ListItemText} from '@mui/material';
import {Menu,Home,GridView,Filter4Rounded} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const styles = {
    sideNav: {
      marginTop: '-60px',
      zIndex: 3,
      marginLeft: '0px',
      position: 'fixed',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
    }
  }
  
  export default class NavDrawer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isDrawerOpened: false,
      };
    }
    toggleDrawerStatus = () => {
      this.setState({
        isDrawerOpened: true,
      })
    }
    closeDrawer = () => {
      this.setState({
        isDrawerOpened: false,
      })
    }
    render() {
      const { isDrawerOpened } = this.state;
      return (
        <div>
            <div>
                <IconButton 
                onClick={this.toggleDrawerStatus}
                size="large" 
                edge="start" 
                color="#050505"
                aria-label="menu"
                sx={{mr:2}}
                >
                    {!isDrawerOpened ? <Menu /> : null}
                </IconButton>
            </div>
            <Divider/>
            <Drawer 
                variant="temporary"
                open={isDrawerOpened}
                onClose={this.closeDrawer}
                >
                    <Link to='/' style={styles.link}>
                        <List>
                            <ListItemButton  key='Home'>
                                <ListItemIcon>
                                    <Home/> 
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItemButton>
                        </List>
                    </Link>
                    <Link to='/TicTacToe' style={styles.link}>
                        <List>
                            <ListItemButton  key='TicTacToe'>
                                <ListItemIcon>
                                    <GridView/> 
                                </ListItemIcon>
                                <ListItemText>TicTacToe</ListItemText>
                            </ListItemButton>
                        </List>
                    </Link>
                    <Link to='/ConnectFour' style={styles.link}>
                        <List>
                            <ListItemButton  key='ConnectFour'>
                                <ListItemIcon>
                                    <Filter4Rounded/> 
                                </ListItemIcon>
                                <ListItemText>Connect Four</ListItemText>
                            </ListItemButton>
                        </List>
                    </Link>
                </Drawer>
        </div>
      )
    }
  }