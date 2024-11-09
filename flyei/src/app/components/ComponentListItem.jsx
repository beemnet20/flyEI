import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Modal,
  Button,
  Typography,
  Snackbar,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PreviewIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';

function ComponentListItem({ text }) {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  // Open and close handlers for modal
  const handlePreviewClick = () => {
    setOpenModal(true);
    handleCloseMenu();
  };
  const handleCloseModal = () => setOpenModal(false);

  // Open and close handlers for snackbar
  const handleAddClick = () => {
    setOpenSnackbar(true);
    handleCloseMenu();
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  // Menu handlers
  const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);
  const handleCloseMenu = () => setMenuAnchor(null);

  // Snackbar action buttons
  const snackbarAction = (
    <>
      <Button color='secondary' size='small' onClick={handleCloseSnackbar}>
        UNDO
      </Button>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </>
  );

  // Construct the view document link
  const viewDocLink = `https://ui.shadcn.com/docs/components/${text.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <>
      <ListItemButton onClick={handleMenuOpen} sx={{ pl: 3, py: 0 }}>
        <ListItemText primary={text} />
      </ListItemButton>

      {/* Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handlePreviewClick}>
          <PreviewIcon fontSize='small' sx={{ mr: 1 }} />
          Preview
        </MenuItem>
        <MenuItem onClick={handleAddClick}>
          <AddIcon fontSize='small' sx={{ mr: 1 }} />
          Add
        </MenuItem>
        <MenuItem>
          <LinkIcon fontSize='small' sx={{ mr: 1 }} />
          <Link href={viewDocLink} target='_blank' >
            View docs
          </Link>
        </MenuItem>
      </Menu>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={`${text} added`}
        action={snackbarAction}
      />

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='preview-modal-title'
        aria-describedby='preview-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            borderRadius: '5px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='preview-modal-title' variant='h6' component='h2'>
            Preview <span style={{ color: '#d8565c' }}>{text}</span>
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: 100,
              bgcolor: 'grey.300',
              mb: 2,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleAddClick}
              sx={{ ml: 1 }}
            >
              Add
            </Button>
            <Button
              variant='outlined'
              color='primary'
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ComponentListItem;
