import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  border: '1px solid lightgray',
  boxShadow: 'none',
  padding: 20,
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid({ page }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {page !== 'Movies' ? (
        <iframe
          src={`https://ui.shadcn.com/examples/${page.toLowerCase()}`}
          width='100%'
          height='800px'
          title='Dynamic Iframe'
          style={{ border: 'none' }}
        />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item></Item>
          </Grid>
          <Grid item xs={4}>
            <Item></Item>
          </Grid>
          <Grid item xs={4}>
            <Item></Item>
          </Grid>
          <Grid item xs={8}>
            <Item></Item>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
