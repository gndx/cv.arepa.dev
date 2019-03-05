import React from 'react';
import styled from 'styled-components';

const Styledh2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: .8px;
  margin: 1em 0 0 0;
  color: #C2185B;
`;

const H2Element = ({ name }) => <Styledh2>{name}</Styledh2>;

export default H2Element;
