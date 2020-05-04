import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const YouTubePlay = styled.div`
  visibility: visible;
  @media only screen and (max-width: 768px) {
    visibility: hidden;
    display: none;
  }
`;

const YoutubePlay = ({ key }) => (
  <Container>
    <YouTubePlay>
      <iframe
        frameBorder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="450"
        height="260"
        src="https://www.youtube.com/embed/szby7ZHLnkA?autoplay=false&amp;cc_load_policy=0&amp;controls=1&amp;disablekb=0&amp;fs=1&amp;iv_load_policy=1&amp;modestbranding=0&amp;playsinline=0&amp;rel=1&amp;showinfo=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1"
        id="widget2"
      ></iframe>
    </YouTubePlay>
  </Container>
);

export default YoutubePlay;
