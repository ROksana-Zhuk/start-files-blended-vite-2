import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem'
import Grid from '../Grid/Grid'
import GridItem from '../GridItem/GridItem'


export default function PhotosGallery({ imagesProp }) {
  return (

    <Grid>
    {imagesProp.map((image) => (
      <GridItem key={image.id}>
        <PhotosGalleryItem oneImage={image}/>
      </GridItem>
    ))}
  </Grid>
)
};
