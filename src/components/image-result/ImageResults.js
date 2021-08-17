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
   const { imagesData } = props;

   const handleClose = () => {
      setOpen(false);
   };

   const handleClickOpen = (img) => {
      setCurrentImg(img);
      setOpen(true);
   };

   return (
      <div>
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
                           <IconButton onClick={() => handleClickOpen(image)}>
                              <ZoomIn style={{ color: "white" }}>Close</ZoomIn>
                           </IconButton>
                        }
                     />
                  </ImageListItem>
               ))}
            </ImageList>
         </Grid>
         <ImageDialog open={open} handleClose={handleClose} img={currentImg} />
      </div>
   );
};

export default ImageResults;
