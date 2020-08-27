import React from 'react';
import styled from 'styled-components';

import { ContentWrapper } from '../common/contentWrapper'
import { COLORS } from '../common/colorConstant'
import { Card } from 'react-bootstrap';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const NoMatch = () => (
  <ContentWrapper>
    <Wrapper>
      <Card>
        <Card.Header className="h5 bg-danger text-white">Wrong Path</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            Navigate using the navigation bars.
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrapper>
  </ContentWrapper>

)