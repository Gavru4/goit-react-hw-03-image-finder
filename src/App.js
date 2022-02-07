import { Component } from "react";
import "./App.css";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Searchbar from "./Components/Searchbar/Searchbar";
// import FechApi from "./Components/Services/FechAPI.jsx";
class App extends Component {
  state = {
    status: "idle",
    request: "",
    webformatURL: "",
    largeImageURL: "",
    id: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.request;
    const nextValue = prevState.request;

    if (prevValue !== nextValue) {
      // this.setState({ status: "pending" });
      fetch(
        `https://pixabay.com/api/?q=${nextValue}&page=1&key=25285051-4b045d69a43564daa3e04547c&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          return response.json();
        })
        .then(({ webformatURL, largeImageURL, id }) => {});
    }
  }
  handleFormSubmit = (requestValue) => {
    this.setState({ request: requestValue });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery />
      </>
    );
  }
}

export default App;
