import { Component } from "react";
import "./App.css";
import LoadMoreBtn from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader.jsx";
import Searchbar from "./Components/Searchbar/Searchbar";
import FechApi from "./Components/Services/FechAPI.jsx";
class App extends Component {
  state = {
    loadMore: true,
    search: "",
    page: 1,
    request: "",
    images: [],
    isLoading: false,
    error: null,
  };
  async onRequestSubmit() {
    const apiAnswer = await FechApi(this.state);
    this.setState({ images: apiAnswer });
  }
  async componentDidMount() {
    // const apiAnswer = await FechApi(this.state);
    // this.setState({ images: apiAnswer });
    this.onRequestSubmit();
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.request !== this.state.request) {
      // const apiAnswer = await FechApi(this.state);
      // this.setState({ images: apiAnswer });
      this.onRequestSubmit();
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      const apiAnswer = await FechApi(this.state);
      this.setState((prev) => ({
        images: [...prev.images, ...apiAnswer],
        isLoading: false,
      }));

      if (apiAnswer.length < 12) {
        return this.setState({ loadMore: false });
      }
      this.setState({ loadMore: true });
    }
  }

  handleFormSubmit = (requestValue) => {
    this.setState({ request: requestValue, page: 1 });
  };
  onLoadMore = (e) => {
    e.preventDefault();

    this.setState((prev) => ({ page: prev.page + 1, isLoading: true }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.loadMore && <LoadMoreBtn onLoadMore={this.onLoadMore} />}
      </>
    );
  }
}

export default App;
