import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Messages from "../../Components/Messages";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upComing, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="UpComing Movies">
          {upComing.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Messages color="#e74c3c" text={error}></Messages>}
    </Container>
  );

HomePresenter.prototypes = {
  popular: ProTypes.array,
  upComing: ProTypes.array,
  nowPlaying: ProTypes.array,
  error: ProTypes.string,
  loading: ProTypes.bool.isRequired,
};

export default HomePresenter;
