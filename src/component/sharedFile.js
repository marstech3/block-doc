import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../common/contentWrapper'
import { COLORS } from '../common/colorConstant'
import { Card, Button } from 'react-bootstrap';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const SharedFile = () => (
  <ContentWrapper>
      <Card>
        <Card.Header className="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  </ContentWrapper>
)