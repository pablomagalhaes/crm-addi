import React, { FC } from 'react';
import styled from 'styled-components';

import Container from './Container.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`;

const Layout: FC = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
