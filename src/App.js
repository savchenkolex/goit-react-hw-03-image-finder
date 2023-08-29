import { Component } from 'react';
import { getImages } from './utils/api_pixabay';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    loading: false,
    modal: {
      isOpen: false,
      image: '',
      alt: '',
    },
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.updateGallery();
    }
  }

  setNewQuery = value => {
    this.setState({ query: value, hits: [], page: 1 });
  };

  async updateGallery() {
    this.setState({ loading: true });
    // Api handler
    try {
      const {
        data: { hits, total },
      } = await getImages(this.state.query, this.state.page);

      this.setState(pervState => {
        return {
          loading: false,
          hits: [...pervState.hits, ...hits],
          maxPages: total / 12,
        };
      });
    } catch (error) {
      console.error(error);
    }
  }

  showModal = (img, alt) => {

    this.setState(pervState => {
      return {
        modal: {
          isOpen: !pervState.modal.isOpen,
          image: img,
          alt: alt,
        },
      };
    });
  }

  closeModal = () => {
    this.setState({ modal: { isOpen: false } });
  }

  loadMoreImages = () => {
    
    this.setState(pervState => {
      return { page: pervState.page + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar queryHandler={this.setNewQuery} />
        {this.state.hits.length !== 0 && (
          <ImageGallery>
            <ImageGalleryItem
              showModal={this.showModal}
              items={this.state.hits}
            />
          </ImageGallery>
        )}
        {this.state.loading && <Loader />}
        {this.state.maxPages > this.state.page && (
          <Button loadMoreImages={this.loadMoreImages} />
        )}

        {this.state.modal.isOpen && (
          <Modal
            image={this.state.modal.image}
            alt={this.state.modal.alt}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
