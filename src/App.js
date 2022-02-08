import { Component, useLayoutEffect } from "react";
import "./App.css";
import LoadMoreBtn from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Searchbar from "./Components/Searchbar/Searchbar";
import FechApi from "./Components/Services/FechAPI.jsx";
class App extends Component {
  state = {
    search: "",
    page: 1,
    request: "",
    images: [],
    isLoading: false,
    error: null,
  };
  async componentDidMount() {
    const apiAnswer = await FechApi(this.state);
    this.setState({ images: apiAnswer });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      const apiAnswer = await FechApi(this.state);
      this.setState({ images: apiAnswer });
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      const apiAnswer = await FechApi(this.state);
      this.setState((prev) => ({ images: [...prev.images, ...apiAnswer] }));
    }
  }
  handleFormSubmit = (requestValue) => {
    this.setState({ request: requestValue, page: 1 });
  };
  onLoadMore = (e) => {
    e.preventDefault();
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <LoadMoreBtn onLoadMore={this.onLoadMore} />
      </>
    );
  }
}

export default App;
