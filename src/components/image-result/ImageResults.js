import React from "react";
import {
   ImageList,
   ImageListItem,
   ImageListItemBar,
   IconButton,
   Grid,
} from "@material-ui/core";
import ZoomIn from "@material-ui/icons/ZoomIn";

const ImageResults = (props) => {
   const { imagesData } = props;
   return (
      <Grid>
         <ImageList cols={12}>
            {imagesData.map((image) => (
               <ImageListItem key={image.id} cols={3} >
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
                           <ZoomIn style={{color: "white"}} />
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
