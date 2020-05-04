import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh- 50px);
  width: 100vw;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
`;

const DetailPresenter = (result, error, loading) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {console.log("presenter", result)}
      <Backdrop
        bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      ></Backdrop>
    </Container>
  );

DetailPresenter.prototypes = {
  result: ProTypes.object,
  error: ProTypes.string,
  loading: ProTypes.bool.isRequired,
};

export default DetailPresenter;
