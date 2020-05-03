import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = (result, error, loading) => null;

DetailPresenter.prototypes = {
  result: ProTypes.object,
  error: ProTypes.string,
  loading: ProTypes.bool.isRequired,
};

export default DetailPresenter;
