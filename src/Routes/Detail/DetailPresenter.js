import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";

import { Route, Link, withRouter } from "react-router-dom";

import { Helmet } from "react-helmet";

import Loader from "../../Components/Loader";

import SubMovie from "../InsideMenu/SubMovie";
import Production from "../InsideMenu/Production";
import Country from "../InsideMenu/Country";
import Pcompany from "../InsideMenu/Pcompany";
import CreatedBy from "../InsideMenu/CreatedBy";
import Seasons from "../InsideMenu/Seasons";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  padding: 0px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  z-index: 0;
  filter: blur(0px);
  opacity: 0.4;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 85vh;
  margin-top: 5vh;

  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  z-index: 1;
`;

const Data = styled.div`
  width: 50%;
  height: 85vh;
  margin-top: 5vh;
  margin-left: 2vw;
  padding: 0px 20px;
  background-color: rgba(200, 200, 200, 0.1);
  z-index: 1;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  line-height: 2;
  font-size: 12px;
  margin-bottom: 50px;
`;
const Item = styled.span`
  position: relative;
  .genre {
    padding: 0px 2px;
  }
`;
const Imdb = styled.a`
  display: inline-block;
  position: absolute;
  top: -4px;
  right: -50px;
  width: 44px;
  height: 22px;
  border-radius: 2px;
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`;
const Divider = styled.span`
  margin: 0px 10px;
`;
const Overview = styled.p`
  margin-top: 20px;
  line-height: 1.7;
  text-align: justify;
  opacity: 0.8;
`;

const InsideMenu = styled("div")`
  margin: 5px 0px;
`;
const List = styled("ul")`
  margin-top: 20px;
  display: flex;
`;
const SLink = styled(Link)`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const Li = styled("li")`
  width: 150px;
  margin-right: 0px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid ${(props) => (props.active ? "dodgerblue" : "gray")};
  padding: 0px;

  background-color: ${(props) => (props.active ? "dodgerblue" : "transparent")};
  color: ${(props) => (props.active ? "white" : "dodgerblue")};
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, error, loading }) =>
    loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        <Helmet>
          <title>{result.title ? result.title : result.name} | BCflix</title>
        </Helmet>
        <Backdrop
          bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        ></Backdrop>
        <Content>
          <Cover
            bgUrl={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          ></Cover>
          <Data>
            <Title>{result.title ? result.title : result.name}</Title>
            <ItemContainer>
              <Item>
                {result.genres &&
                  result.genres.slice(0, 3).map((genre, index) =>
                    index < 2 ? (
                      <span key={genre.id} className="genre">
                        {genre.name} /
                      </span>
                    ) : (
                      <span key={genre.id} className="genre">
                        {genre.name}
                      </span>
                    )
                  )}
              </Item>
              <Divider> ◦ </Divider>
              <Item>
                {result.runtime
                  ? `${result.runtime} min`
                  : `${result.episode_run_time[0]} min`}
              </Item>
              <Divider> ◦ </Divider>
              <Item>
                {result.release_date
                  ? result.release_date
                  : result.first_air_date}
              </Item>
              <Divider> ◦ </Divider>
              <Item>{result.vote_average && result.vote_average} / 10</Item>
              <Divider> ◦ </Divider>
              <Item>
                <Imdb
                  href={`https://www.imdb.com/title/${result.imdb_id}`}
                  target={"_blank"}
                  src={require("../../asstes/logoImdb.png")}
                />
              </Item>
              <Overview>{result.overview}</Overview>
            </ItemContainer>
            {/* 여긴 인사이드 메뉴 */}
            {pathname.includes("movie") ? (
              <InsideMenu>
                <List>
                  <Li active={pathname === `/movie/${result.id}/subMovie`}>
                    <SLink to={`/movie/${result.id}/subMovie`}>YouTube</SLink>
                  </Li>
                  <Li active={pathname === `/movie/${result.id}/production`}>
                    <SLink to={`/movie/${result.id}/production`}>
                      Production
                    </SLink>
                  </Li>
                  <Li active={pathname === `/movie/${result.id}/country`}>
                    <SLink to={`/movie/${result.id}/country`}>Country</SLink>
                  </Li>
                </List>
              </InsideMenu>
            ) : (
              <InsideMenu>
                <List>
                  <Li active={pathname === `/tv/${result.id}/pCompany`}>
                    <SLink to={`/tv/${result.id}/pCompany`}>
                      youtube video
                    </SLink>
                  </Li>
                  <Li active={pathname === `/tv/${result.id}/createdBy`}>
                    <SLink to={`/tv/${result.id}/createdBy`}>Created By</SLink>
                  </Li>
                  <Li active={pathname === `/tv/${result.id}/seasons`}>
                    <SLink to={`/tv/${result.id}/seasons`}>Seasons</SLink>
                  </Li>
                </List>
              </InsideMenu>
            )}
            {/* 여긴 인사이드 메뉴 */}

            {/* 여긴 인사이드 메뉴 라우터 */}

            <Route path="/movie/:id/subMovie" component={SubMovie}></Route>
            <Route path="/movie/:id/production" component={Production}></Route>
            <Route path="/movie/:id/country" component={Country}></Route>
            <Route path="/tv/:id/pCompany" component={Pcompany}></Route>
            <Route path="/tv/:id/createdBy" component={CreatedBy}></Route>
            <Route path="/tv/:id/seasons" component={Seasons}></Route>
            {/* 여긴 인사이드 메뉴 라우터 */}
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.prototypes = {
  result: ProTypes.object,
  error: ProTypes.string,
  loading: ProTypes.bool.isRequired,
};

export default DetailPresenter;
