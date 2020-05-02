import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "../../api";

export default class extends React.Component {
  state = {
    popular: null,
    upComing: null,
    nowPlaying: null,
    topRated: null,
    latest: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: upComing },
      } = await movieApi.upComing();
      this.setState({ popular, upComing, nowPlaying });
    } catch (error) {
      this.setState({
        error: `Can't find movies information`,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      popular,
      upComing,
      nowPlaying,
      topRated,
      latest,
      error,
      loading,
    } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        popular={popular}
        upComing={upComing}
        nowPlaying={nowPlaying}
        topRated={topRated}
        latest={latest}
        error={error}
        loading={loading}
      ></HomePresenter>
    );
  }
}
