import * as React from 'react';

import styled from 'styled-components';

import media from '../../../utils/media';
import NavBar from '../NavBar';

const Layout = props => (
  <Container>
    <NavBar />
    {props.children}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 55%;
  padding: 0 20px;

  ${media.desktop`width: 85%;`}
  ${media.tablet`width: 95%;`}
  ${media.phone`width: 100%;`}
`;

export default Layout;