
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CartList from "../../CartItems/CartList";

const style = {
  position: "fixed",
  top: "3.5rem",
  right: "1.5rem",
  bgcolor: "#F2F2F2",
  outline: "none",
  p: 2,
  textAlign: "center",
  
};

const CartModal=({dopen,callback})=>{
  const [Open,setOpen]=React.useState(dopen);

  const handleClose = () => {
    setOpen(false);
    callback(false);
  };

  const setModal =(arg)=>{
    setOpen(arg)
    callback(arg)
  }

  return (
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} >
          <CartList setModal={setModal}/>
        </Box>
      </Modal>
  );
}

export default CartModal;