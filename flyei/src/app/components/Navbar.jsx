import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <AppBar position='fixed' sx={{ zIndex: 1201, boxShadow: "none", backgroundColor: "white", color: "black", borderBottom: "solid 1px lightgray"}} >
     <Toolbar variant='dense'>
        <Typography variant='h6' noWrap component='div'>
          flyEI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
