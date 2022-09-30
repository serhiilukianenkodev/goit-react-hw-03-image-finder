import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppStyled } from 'components/App/AppStyled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    status: 'idle',
    page: 1,
  };

  setSearchQuery = query => {
    this.setState({ searchQuery: query, page: 1 });
  };

  onLoadMoreClick = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.setSearchQuery} />
        <ImageGallery query={this.state.searchQuery} page={this.state.page} />
        <Button onClick={this.onLoadMoreClick} />
        <GlobalStyle />
      </AppStyled>
    );
  }
}
