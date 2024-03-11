import styled from "styled-components";
import React from "react";
import css from "styled-components";

export default function EmptyGraph() {
  return (
    <Container>
      <Row style={{ marginBottom: "-5px" }}>
        <Circle />
        <Circle style={{ marginLeft: "-5px" }} />
      </Row>
      <Row>
        <Circle style={{ marginRight: "-5px" }} />
        <Circle />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #d3d8db;
  position: relative;
  margin-right: ${(props) => (props.mr ? `-5px` : "0px")};
  margin-left: ${(props) => (props.ml ? `-5px` : "0px")};
`;

const Row = styled.div`
  display: flex;
`;
