import React from "react";
import {
   ImageList,
   ImageListItem,
   ImageListItemBar,
   IconButton,
} from "@material-ui/core";
import { ZoomIn } from "@material-ui/icons";

const ImageResults = (props) => {
   const { imagesData } = props;
   return (
      <ImageList cols={3} rowHeight={100} >
         {imagesData.map((image) => {
            <ImageListItem cols={1} key={image.id} rowHeight={100}>
               {console.log(image.largeImageURL)}
               {console.log(image.id)}
               <img src={image.largeImageURL} alt="" />
            </ImageListItem>;

            <ImageListItemBar
               title={image.tags}
               subtitle={
                  <span>
                     by <strong>{image.user}</strong>
                  </span>
               }
               actionIcon={
                  <IconButton>
                     <ZoomIn />
                  </IconButton>
               }
            />;
         })}
      </ImageList>
   );
};

export default ImageResults;
