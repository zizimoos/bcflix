import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const TvPresenter = ({ popular, topRated, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((tvShow) => (
            <span key={tvShow.id}>{tvShow.original_name}</span>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="TopRated Shows">
          {topRated.map((tvShow) => (
            <span key={tvShow.id}>{tvShow.original_name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="AiringToday Shows">
          {airingToday.map((tvShow) => (
            <span key={tvShow.id}>{tvShow.original_name}</span>
          ))}
        </Section>
      )}
    </Container>
  );

TvPresenter.prototypes = {
  popular: ProTypes.array,
  topRated: ProTypes.array,
  airingToday: ProTypes.array,
  error: ProTypes.string,
  loading: ProTypes.bool.isRequired,
};

export default TvPresenter;
