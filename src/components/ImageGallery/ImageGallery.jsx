import { Component } from 'react';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGalleryStyled';
import { fetchImages } from '../../services/ferchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    // console.log(this.props.query);
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log(this.props.query);
    // console.log(nextProps.query);
    if (this.props.query !== nextProps.query) this.setState({ images: [] });
    if (
      this.props.query !== nextProps.query ||
      this.props.page !== nextProps.page
    )
      fetchImages(nextProps.query, nextProps.page).then(data => {
        this.setState(state => {
          return { images: [...state.images, ...data.hits] };
        });
      });
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
