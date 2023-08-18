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
    query: 'stars',
    page: 1,
    hits: [],
    loading: false,
    modal: {
      isOpen: false,
      image: '',
      alt: '',
    },
  };

  async componentDidMount() {
    this.updateGallery();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.updateGallery();
    }
  }

  submitHandler = event => {
    event.preventDefault();
    const { value } = event.currentTarget[1];
    this.setState({ query: value, hits: [], page: 1 });
  };

  async updateGallery() {
    this.setState({ loading: true });
    // Api handler
    try {
      const {
        data: { hits, total },
      } = await getImages(this.state.query, this.state.page);

      if (
        this.state.hits.length > 0 &&
        hits.some((e, i) => e.id !== this.state.hits[i].id)
      ) {
        this.setState(pervState => {
          return {
            loading: false,
            hits: [...pervState.hits, ...hits],
          };
        });
      } else {
        this.setState(pervState => {
          return {
            loading: false,
            maxPages: total / 12,
            hits: hits,
          };
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  showModal = event => {
  
  if (event.type === "keydown") {
    this.setState({modal:{isOpen: false}});
    
    return;
  }

    this.setState(pervState => {
      return {
        modal: {
          isOpen: !pervState.modal.isOpen,
          image: event.target.dataset.bigimg,
          alt: event.target.alt,
        },
      };
    });
  };

  loadMoreImages = () => {
    this.setState(pervState => {
      return { page: pervState.page + 1 };
    });
  };

  render() {
    
    return (
      <div className="App">
        <Searchbar onSubmit={this.submitHandler} />
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
            showModal={this.showModal}
          />
        )}
      </div>
    );
  }
}

export default App;
