import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  width: 100vw;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  padding: 0px 20px;
  color: whitesmoke;
  background-color: rgba(90, 90, 90, 1);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 100px;
  height: 40px;
  list-style: none;
  &:not(:last-child) {
    margin-right: 5px;
  }
  border-bottom: 3px solid
    ${(props) => (props.current ? "dodgerblue" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const Slink = styled(Link)`
  text-decoration: none;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {/* {console.log(pathname)} */}
    <List className="nav">
      <Item current={pathname === "/"}>
        <Slink to="/">Movie</Slink>
      </Item>
      <Item current={pathname === "/tv"}>
        <Slink to="/tv">TV</Slink>
      </Item>
      <Item current={pathname === "/search"}>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
  </Header>
));
