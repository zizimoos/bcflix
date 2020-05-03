import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
`;

const SearchPresenter = ({
  searchTerm,
  movieResults,
  tvResults,
  handleSubmit,
  updateTerm,
  error,
  loading,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search Movies or TV Shows ..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((tvShow) => (
              <span key={tvShow.id}>{tvShow.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.prototypes = {
  searchTerm: ProTypes.string,
  movieResults: ProTypes.array,
  tvResults: ProTypes.array,
  handleSubmit: ProTypes.func.isRequired,
  updateTerm: ProTypes.func.isRequired,
  error: ProTypes.string,
  loading: ProTypes.bool.isRequired,
};

export default SearchPresenter;
