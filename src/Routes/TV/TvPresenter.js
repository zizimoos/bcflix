import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Messages from "../../Components/Messages";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const TvPresenter = ({ popular, topRated, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>TV Shows | BCflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((tvShow) => (
              <Poster
                key={tvShow.id}
                id={tvShow.id}
                imgUrl={tvShow.poster_path}
                title={tvShow.original_name}
                rating={tvShow.vote_average}
                year={
                  tvShow.first_air_date && tvShow.first_air_date.slice(0, 4)
                }
              ></Poster>
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="TopRated Shows">
            {topRated.map((tvShow) => (
              <Poster
                key={tvShow.id}
                id={tvShow.id}
                imgUrl={tvShow.poster_path}
                title={tvShow.original_name}
                rating={tvShow.vote_average}
                year={
                  tvShow.first_air_date && tvShow.first_air_date.slice(0, 4)
                }
              ></Poster>
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="AiringToday Shows">
            {airingToday.map((tvShow) => (
              <Poster
                key={tvShow.id}
                id={tvShow.id}
                imgUrl={tvShow.poster_path}
                title={tvShow.original_name}
                rating={tvShow.vote_average}
                year={
                  tvShow.first_air_date && tvShow.first_air_date.slice(0, 4)
                }
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Messages color="#e74c3c" text={error}></Messages>}
      </Container>
    )}
    ;
  </>
);

TvPresenter.prototypes = {
  popular: ProTypes.array,
  topRated: ProTypes.array,
  airingToday: ProTypes.array,
  error: ProTypes.string,
  loading: ProTypes.bool.isRequired,
};

export default TvPresenter;
