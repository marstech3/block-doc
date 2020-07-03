import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../common/contentWrapper'
import { COLORS } from '../common/colorConstant'
import { Card,Jumbotron,Button } from 'react-bootstrap';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Setting = () => (
  <ContentWrapper>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
  </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </ContentWrapper>
)