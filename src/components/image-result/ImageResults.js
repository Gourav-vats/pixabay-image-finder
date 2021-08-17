import React from "react";
import { useState } from "react";
import {
   ImageList,
   ImageListItem,
   ImageListItemBar,
   IconButton,
   Grid,
} from "@material-ui/core";
import { ZoomIn } from "@material-ui/icons";
import ImageDialog from "../image-dialog/ImageDialog";

const ImageResults = (props) => {
   const [open, setOpen] = useState(false);
   const [currentImg, setCurrentImg] = useState({});

   const handleClose = () => {
      setOpen(false);
   };

   const handleClickOpen = () => {
      setOpen(true);
      console.log(open);
      <ImageDialog open={open} handleClose={handleClose} img={currentImg} />;
      console.log(open);
   };

   const { imagesData } = props;

   return (
      <Grid>
         <ImageList cols={12}>
            {imagesData.map((image) => (
               <ImageListItem key={image.id} cols={3}>
                  <img src={image.largeImageURL} alt={image.type} />
                  <ImageListItemBar
                     title={image.tags}
                     subtitle={
                        <span>
                           by <strong>{image.user}</strong>
                        </span>
                     }
                     actionIcon={
                        <IconButton
                           onClick={() => {
                              setCurrentImg(image);
                              handleClickOpen();
                           }}
                        >
                           <ZoomIn style={{ color: "white" }}>Close</ZoomIn>
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
