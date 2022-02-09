import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ el }) => {
  const { webformatURL, largeImageURL, tags, id } = el;

  return (
    <li className={s.galleryItem}>
      <img className={s.galleryImage} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
