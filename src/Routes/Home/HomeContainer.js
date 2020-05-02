import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    popular: null,
    upComing: null,
    topRated: null,
    nowPlaying: null,
    latest: null,
    error: null,
    loading: true,
  };
  render() {
    const {
      popular,
      upComing,
      topRated,
      nowPlaying,
      latest,
      error,
      loading,
    } = this.state;
    return (
      <HomePresenter
        popular={popular}
        upComing={upComing}
        topRated={topRated}
        nowPlaying={nowPlaying}
        latest={latest}
        error={error}
        loading={loading}
      ></HomePresenter>
    );
  }
}
