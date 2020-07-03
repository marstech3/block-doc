import React from 'react';
import styled from 'styled-components';
import {ContentWrapper} from '../common/contentWrapper'
import {COLORS} from '../common/colorConstant'
import { Card } from 'react-bootstrap';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const MyFile = () => (
  <ContentWrapper>
  <GridWrapper>
  {[
  'Primary',
  'Secondary',
  'Success',
  'Danger',
  'Warning',
  'Info',
  'Light',
  'Dark',
].map((variant, idx) => (
  <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{variant} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
))
}
  </GridWrapper>
  </ContentWrapper>
)