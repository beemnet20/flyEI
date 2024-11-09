'use client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar />
          <Sidebar/>  
          <Box component='main' sx={{ flexGrow: 1, pt: 4}}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
