import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

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
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="UpComing Movies">
          {upComing.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
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
