'use client';
import * as React from 'react';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import IconButton from '@mui/material/IconButton';
import {
  Box,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Stack,
} from '@mui/material';

import BasicGrid from './components/BasicGrid';



const demoPages = [
  'Mail',
  'Dashboard',
  'Tasks',
  'Playground',
  'Forms',
  'Music',
  'Authentication',
  'Movies',
];

export default function Home() {
  const [page, setPage] = React.useState('Movies');
  const [device, setDevice] = React.useState('desktop');

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleDeviceChange = (event, newDevice) => {
    if (newDevice !== null) {
      setDevice(newDevice);
    }
  };

  return (
    <>
      <Toolbar
        variant="dense"
        sx={{
          pt: 3,
          borderBottom: '1px solid lightgray',
          justifyContent: 'space-between',
        }}
      >
        <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
          <Stack direction="row" spacing={1}>
            <InputLabel id="page-label">Page</InputLabel>
            <Select
              labelId="page-label"
              id="page"
              value={page}
              label="page"
              onChange={handlePageChange}
            >
              {demoPages.map((demoPage) => (
                <MenuItem key={demoPage} value={demoPage}>
                  {demoPage}
                </MenuItem>
              ))}
            </Select>

            <ToggleButtonGroup
              value={device}
              exclusive
              onChange={handleDeviceChange}
              aria-label="device"
            >
              <ToggleButton value="desktop" aria-label="desktop">
                <PersonalVideoIcon />
              </ToggleButton>
              <ToggleButton value="mobile" aria-label="mobile">
                <SmartphoneIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="undo">
              <UndoIcon />
            </IconButton>
            <IconButton aria-label="redo">
              <RedoIcon />
            </IconButton>
            <Button variant="outlined">Preview</Button>
            <Button variant="contained">Publish</Button>
          </Stack>
        </FormControl>
      </Toolbar>

      <Box sx={{ p: 2 }}>
        {page}
        <BasicGrid page={page}/>
      </Box>
    </>
  );
}
