import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8em 0px;
`;

const Load = styled.div`
  border: 6px solid #F8BBD3;
  border-top: 6px solid #C2185B;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${spin} 2s linear infinite;
`;

const Loader = () => (
  <Wrapper>
    <Load />
  </Wrapper>
);


export default Loader;