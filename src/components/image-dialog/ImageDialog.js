import React from "react";
import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const ImageDialog = (props) => {
   console.log(props);
   const { open, handleClose, img } = props;

   return (
      <Dialog open={open} onClose={handleClose()}>
         <DialogTitle>{img.tags}</DialogTitle>
         <DialogContent>
            <img src={img.largeImageURL} width={100 + "%"} />
         </DialogContent>
         <DialogActions>
            <Close onClick={handleClose} />
         </DialogActions>
      </Dialog>
   );
};

export default ImageDialog;
