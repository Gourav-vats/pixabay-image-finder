import React from "react";
import {
   ImageList,
   ImageListItem,
   ImageListItemBar,
   IconButton,
   Grid,
} from "@material-ui/core";
import ZoomInTwoToneIcon from "@material-ui/icons/ZoomInTwoTone";

const ImageResults = (props) => {
   const { imagesData } = props;
   return (
      <Grid md={2}>
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
                        <IconButton>
                           <ZoomInTwoToneIcon color="white" />
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
