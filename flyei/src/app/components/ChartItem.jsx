import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemText,
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function ChartItem({ text }) {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleAddChart = (chartType) => {
    setSnackbarMessage(`${chartType} added successfully!`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <>
      <ListItemButton onClick={handleOpenModal}>
        <ListItemText primary={text} />
      </ListItemButton>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="chart-modal-title"
        aria-describedby="chart-modal-description"
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
            <Typography id="chart-modal-title" variant="h6">
              Select a Chart to Add
            </Typography>
            <IconButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chart Options */}
          <Grid container spacing={2}>
            {['Bar Chart', 'Line Chart', 'Pie Chart', 'Scatter Plot'].map((chartType, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box
                  sx={{
                    width: '100%',
                    height: 120,
                    bgcolor: 'grey.300',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    p: 1,
                  }}
                >
                  <Typography variant="caption" sx={{ mb: 1 }}>
                    {chartType}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => handleAddChart(chartType)}
                  >
                    Add
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default ChartItem;
