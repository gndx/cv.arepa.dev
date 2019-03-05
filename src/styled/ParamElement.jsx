import React from 'react';
import styled from 'styled-components';

const StyledParam = styled.p`
  color: #757575;
  font-weight: 300;
  margin: .5em 0 1.2em 0;
`;

const ParamElement = ({ content }) => <StyledParam>{content}</StyledParam>;

export default ParamElement;
