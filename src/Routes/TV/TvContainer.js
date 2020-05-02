import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      this.setState({ popular, topRated, airingToday });
    } catch (error) {
      this.setState({ error: `Can't find TV Shows informations.` });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { popular, topRated, airingToday, error, loading } = this.state;
    console.log(this.state);
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
