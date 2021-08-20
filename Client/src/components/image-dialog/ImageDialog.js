import React from "react";
import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Button,
} from "@material-ui/core";

const ImageDialog = (props) => {
   const { open, handleClose, img } = props;

   return (
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle>{img.tags}</DialogTitle>
         <DialogContent>
            <img src={img.largeImageURL} width={100 + "%"} />
         </DialogContent>
         <DialogActions>
            <Button
               onClick={handleClose}
               style={{ backgroundColor: "#1597BB", color:"white" }}
               variant="contained"
               size="small"
            >
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );
};

export default ImageDialog;
