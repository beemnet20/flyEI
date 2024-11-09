import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    border: '1px solid lightgray',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  
    // Dark mode style
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  
    // Hover style
    '&:hover': {
      backgroundColor: 'lightblue',
    },
  }));
  

export default function BasicGrid({ page, device }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {page !== 'Movies' ? (
        <iframe
          src={`https://ui.shadcn.com/examples/${page.toLowerCase()}`}
          width={device === 'desktop' ? '100%' : '50%'}
          height='800px'
          title='Dynamic Iframe'
          style={{
            border: 'solid 1px lightgray',
            margin: '0 auto',
            display: 'block',
          }}
        />
      ) : (
        <Box sx={{  }}>
          <Grid
            container
            spacing={1}
            sx={{
              paddingRight: 1,
              paddingBottom: 1,
              margin: '0 auto',
              width: device === 'desktop' ? '100%' : '50%',
              border: 'solid 1px lightgray'
            }}
          >
            <Grid item xs={12}>
              <h1 style={{ paddingInline: 10, marginBottom: 0 }}>Movies</h1>
              <h4 style={{ paddingInline: 10, marginBlock: 0, color: 'gray' }}>
                view the latest movies here
              </h4>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ p: 10 }}></Item>
              <Item sx={{ p: 2, background:"lightgray"}}></Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ p: 10 }}></Item>
              <Item sx={{ p: 2, background:"lightgray"}}></Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ p: 10 }}></Item>
              <Item sx={{ p: 2, background:"lightgray"}}></Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ p: 10 }}></Item>
              <Item sx={{ p: 2, background:"lightgray"}}></Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ p: 10 }}></Item>
              <Item sx={{ p: 2, background:"lightgray"}}></Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ p: 10 }}></Item>
              <Item sx={{ p: 2, background:"lightgray"}}></Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ p: 20 }}></Item>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
