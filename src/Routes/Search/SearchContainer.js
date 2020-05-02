import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    searchTerm: "",
    movieResult: null,
    tvResult: null,
    error: null,
    loading: false,
  };
  render() {
    const { searchTerm, movieResult, tvResult, error, loading } = this.state;
    return (
      <SearchPresenter
        searchTerm={searchTerm}
        movieResult={movieResult}
        tvResult={tvResult}
        error={error}
        loading={loading}
      ></SearchPresenter>
    );
  }
}
