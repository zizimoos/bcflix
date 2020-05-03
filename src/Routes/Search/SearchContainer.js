import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    searchTerm: "",
    movieResults: null,
    tvResults: null,
    error: null,
    loading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ searchTerm: value });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch (error) {
      this.setState({ error: "Can't find result." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { searchTerm, movieResults, tvResults, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        searchTerm={searchTerm}
        movieResults={movieResults}
        tvResults={tvResults}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      ></SearchPresenter>
    );
  }
}
