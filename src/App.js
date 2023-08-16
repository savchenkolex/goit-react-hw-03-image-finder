import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';

class App extends Component {



  submitHandler = event => {
    event.preventDefault();
    console.log(event);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      // fetch()
      console.log('state is changes');
    }
  }

  render() {
    return <div className='App'>
      <Searchbar onSubmit={this.submitHandler} />
      <ImageGallery>
          <ImageGalleryItem items="arr" />
      </ImageGallery>
    </div>
  }
}

export default App;
