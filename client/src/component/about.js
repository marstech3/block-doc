import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../common/contentWrapper";
import { Card } from "react-bootstrap";
import { COLORS } from "../common/colorConstant";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const About = () => (
  <ContentWrapper>
    <Card>
      <Card.Header>About</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{" "}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </ContentWrapper>
);
