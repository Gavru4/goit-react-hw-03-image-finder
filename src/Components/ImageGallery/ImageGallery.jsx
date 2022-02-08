import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map((el) => {
        return <ImageGalleryItem el={el} key={el.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
