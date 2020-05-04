import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  font-size: 12px;
  line-height: 2;
`;
const Li = styled.li`
  list-style: none;
  a {
    text-decoration: none;
  }
`;

// const Icon = styled.span`
//   font-size: 13px;
//   margin-right: 10px;
// `;

const SubMoviePresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {console.log(result.videos)}
      <Content>
        {result.videos.results.map((video) => (
          <Li key={video.id}>
            <a
              href={`http://youtube.com/watch?v=${video.key}`}
              alt={video.name}
            >
              {video.name}
            </a>{" "}
          </Li>
        ))}
      </Content>
    </Container>
  );

SubMoviePresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SubMoviePresenter;
