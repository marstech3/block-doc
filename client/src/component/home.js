import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../common/contentWrapper'
import { COLORS } from '../common/colorConstant'
import { Card ,Carousel} from 'react-bootstrap';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = () => (
  <ContentWrapper>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.etimg.com/thumb/width-640,height-480,imgsize-1222409,resizemode-1,msid-64215597/blockchain-may-not-be-as-cool-as-it-thinks-it-is.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://news.bitcoin.com/wp-content/uploads/2016/10/cool-data-pic-bro.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://whaleshares.io/imageupload_data/526318d9811c1f696e9d3d98f09761f9d1b4a655"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </ContentWrapper>
)