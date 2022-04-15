import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function SimpleBackdrop({open,setOpen}) {
  
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
    }, 1000);
    }
  }, [open]);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
      
    };
  
    return (
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        
      </div>
    );
  }