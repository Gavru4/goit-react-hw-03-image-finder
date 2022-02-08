import { Component } from "react";

class Searchbar extends Component {
  state = {
    request: "",
  };

  handleNameChange = (e) => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };

  onHandleSubmit = (e) => {
    const requestValue = this.state.request;
    e.preventDefault();

    if (requestValue.trim() === "") {
      return alert("Entre name");
    }
    this.props.onSubmit(requestValue);
    this.setState({ request: "" });

    if (!requestValue) {
      console.log(requestValue);
    }
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onHandleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleNameChange}
            className="input"
            type="text"
            value={this.state.request}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
