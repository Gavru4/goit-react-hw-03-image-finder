const ImageGalleryItem = ({ el }) => {
  const { webformatURL, largeImageURL, tags, id } = el;

  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
