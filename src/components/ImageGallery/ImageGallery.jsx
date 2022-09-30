import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGalleryStyled';
import { fetchImages } from '../../services/ferchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentWillUpdate(nextProps, nextState) {
    const { query, page, setStatus } = this.props;
    if (query !== nextProps.query) this.setState({ images: [] });
    if (query !== nextProps.query || page !== nextProps.page) {
      setStatus('loading');
      fetchImages(nextProps.query, nextProps.page, setStatus).then(data => {
        if (data.hits.length < 1) {
          setStatus('rejected');
        } else {
          setStatus('resolved');
        }
        this.setState(state => {
          return { images: [...state.images, ...data.hits] };
        });
      });
    }
  }

  render() {
    return (
      this.state.images.length > 0 && (
        <ImageGalleryStyled>
          {this.state.images.map(item => {
            return <ImageGalleryItem item={item} key={item.id} />;
          })}
        </ImageGalleryStyled>
      )
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
};
