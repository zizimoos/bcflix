import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../asstes/noPosterSmall.png";

const Container = styled.div`
  list-style: none;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  transition: opacity 0.5s ease-in-out;
`;
const Rating = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
`;

const Year = styled.span``;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : require("../asstes/noPosterSmall.png")
          }
        ></Image>
        <Rating>{rating} / 10</Rating>
      </ImageContainer>
      <Title>{title.length > 15 ? `${title.slice(0, 15)} ...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
