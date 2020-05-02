import React from "react";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    error: null,
    loading: true,
  };
  render() {
    const { popular, topRated, airingToday, error, loading } = this.state;
    return (
      <TvPresenter
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
        error={error}
        loading={loading}
      ></TvPresenter>
    );
  }
}
