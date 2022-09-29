import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppStyled } from 'components/App/AppStyled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    status: 'idle',
  };

  setSearchQuery = query => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.setSearchQuery} />
        <ImageGallery query={this.state.searchQuery} />
        <GlobalStyle />
      </AppStyled>
    );
  }
}
