import React from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from 'react-redux';
import { getcartItems } from '../../Slices/CartSlice';

const EmptyBasket = ({open,setOpen}) => {
    const dispatch =useDispatch();
    

    const handleYes = () => {
        localStorage.removeItem('products');
        dispatch(getcartItems());
        setOpen(false);
        
      };
    
      const handleNo = () => {
        setOpen(false);
      };
    
  return (
    <Dialog
        open={open}
        onClose={() => {
          setOpen(true);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are You really want to sure Empty Cartlist?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleNo}>No</Button>
          <Button onClick={handleYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default EmptyBasket