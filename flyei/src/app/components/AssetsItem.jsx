import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  Modal,
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  IconButton,
  Grid,
  Snackbar,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDropzone } from 'react-dropzone';

function AssetsItem({ text }) {
  const [openModal, setOpenModal] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [images, setImages] = useState(Array.from({ length: 6 }));
  const [videos, setVideos] = useState(Array.from({ length: 4 }));
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  // Drag and drop handling
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log('Files uploaded:', acceptedFiles);
    },
  });

  // Add and remove handlers
  const handleAddAsset = (index, type) => {
    setSnackbarMessage(`${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1} added`);
    setOpenSnackbar(true);
  };

  const handleRemoveAsset = (index, type) => {
    if (type === 'image') {
      setImages(images.filter((_, i) => i !== index));
    } else if (type === 'video') {
      setVideos(videos.filter((_, i) => i !== index));
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <ListItem button onClick={handleOpenModal}>
        <ListItemText primary={text} />
      </ListItem>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="assets-modal-title"
        aria-describedby="assets-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 3,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography id="assets-modal-title" variant="h6">
              Manage Assets
            </Typography>
            <IconButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Tabs */}
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="Images" />
            <Tab label="Videos" />
            <Tab label="Upload New" />
          </Tabs>

          {/* Tab Panels */}
          <Box sx={{ mt: 2 }}>
            {tabIndex === 0 && (
              <Grid container spacing={2}>
                {images.map((_, index) => (
                  <Grid item xs={4} key={index}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 100,
                        bgcolor: 'grey.300',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="caption">Image {index + 1}</Typography>
                      <IconButton
                        aria-label="add"
                        size="small"
                        color="primary"
                        onClick={() => handleAddAsset(index, 'image')}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="remove"
                        size="small"
                        color="secondary"
                        onClick={() => handleRemoveAsset(index, 'image')}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
            {tabIndex === 1 && (
              <Grid container spacing={2}>
                {videos.map((_, index) => (
                  <Grid item xs={6} key={index}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 100,
                        bgcolor: 'grey.300',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="caption">Video {index + 1}</Typography>
                      <Stack direction='horizontal'>
                      <IconButton
                        aria-label="add"
                        size="small"
                        color="primary"
                        onClick={() => handleAddAsset(index, 'video')}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="remove"
                        size="small"
                        color="secondary"
                        onClick={() => handleRemoveAsset(index, 'video')}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
            {tabIndex === 2 && (
              <Box
                {...getRootProps()}
                sx={{
                  mt: 2,
                  p: 2,
                  border: '2px dashed #ccc',
                  borderRadius: '8px',
                  textAlign: 'center',
                  bgcolor: isDragActive ? 'grey.100' : 'background.paper',
                }}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Typography>Drop the files here...</Typography>
                ) : (
                  <>
                    <UploadFileIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography>Drag & drop some files here, or click to select files</Typography>
                    <Button variant="contained" sx={{ mt: 2 }}>
                      Select Files
                    </Button>
                  </>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Modal>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
}

export default AssetsItem;
