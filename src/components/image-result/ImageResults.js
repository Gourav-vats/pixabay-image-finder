import React from "react";
import { useState } from "react";
import {
   ImageList,
   ImageListItem,
   ImageListItemBar,
   IconButton,
   Grid,
   useMediaQuery,
} from "@material-ui/core";
import { ZoomIn, Close } from "@material-ui/icons";
import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const ImageResults = (props) => {
   const [open, setOpen] = useState(false);
   const theme = useTheme();
   const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const { imagesData } = props;

   return (
      <Grid>
         <ImageList cols={12}>
            {imagesData.map((image) => (
               <ImageListItem key={image.id} cols={3}>
                  <img src={image.largeImageURL} alt={image.type} />
                  <Dialog
                     fullScreen={fullScreen}
                     open={open}
                     onClose={handleClose}
                  >
                     <DialogTitle>{image.tags}</DialogTitle>
                     <DialogContent>
                        <img src={image.largeImageURL} width={100 + "%"} />
                     </DialogContent>
                     <DialogActions>
                        <Close onClick={handleClose} />
                     </DialogActions>
                  </Dialog>
                  <ImageListItemBar
                     title={image.tags}
                     subtitle={
                        <span>
                           by <strong>{image.user}</strong>
                        </span>
                     }
                     actionIcon={
                        <IconButton onClick={handleClickOpen}>
                           <ZoomIn style={{ color: "white" }} />
                        </IconButton>
                     }
                  />
               </ImageListItem>
            ))}
         </ImageList>
      </Grid>
   );
};

export default ImageResults;
