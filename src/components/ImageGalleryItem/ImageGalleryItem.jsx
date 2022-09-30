import PropTypes from 'prop-types';
import {
  GalleryItemStyled,
  GalleryImgStyled,
} from 'components/ImageGalleryItem/ImageGalleryItemStyled';

export const ImageGalleryItem = ({ item }) => {
  const { webformatURL, largeImageURL, tags } = item;
  return (
    <GalleryItemStyled>
      <GalleryImgStyled src={webformatURL} alt={tags} />
    </GalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
