import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-weight: 600;
`;

const Messages = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Messages.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Messages;
