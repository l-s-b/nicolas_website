/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { useState, useEffect, Fragment } from 'react';

export default function MUI_Dialog({children, titleText, className, openNow, clearMCForm}) {
  const [open, setOpen] = useState(openNow || false);

  useEffect(() => {
    if (openNow) setOpen(true);
  }, [openNow]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    clearMCForm && clearMCForm();
  };

  return (
    <Fragment>
      <a className={`pointer ${className}`} onClick={handleClickOpen} href="#">
        { children }
      </a>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ '& .MuiDialog-paper': { background: '#f7f7ee' }  }} //creamBg
      >
        <DialogTitle
          className="brownText" 
          sx={{ m: 0, p: 2, color: '#811f1a'}} //brownText
          id="customized-dialog-title"
        >
          {titleText}
        </DialogTitle>
        
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{color: '#811f1a'}} //brownText
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
