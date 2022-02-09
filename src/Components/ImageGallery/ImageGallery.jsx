import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.gallery}>
      {images.map((el) => {
        return <ImageGalleryItem el={el} key={el.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
