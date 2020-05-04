import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Messages from "../../Components/Messages";
import Poster from "../../Components/Poster";

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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((tvShow) => (
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
      </>
    )}
    {error && <Messages color="#e74c3c" text={error}></Messages>}
    {movieResults &&
      tvResults &&
      movieResults.length === 0 &&
      tvResults.length === 0 && (
        <Messages color="#acacac" text="Nothing found"></Messages>
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
