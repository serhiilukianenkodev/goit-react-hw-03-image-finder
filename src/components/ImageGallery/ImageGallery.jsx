import { Component } from 'react';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGalleryStyled';

export class ImageGallery extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    // console.log(this.props.query);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(this.props.query);
    console.log(nextProps.query);
  }

  render() {
    return <ImageGalleryStyled />;
  }
}
