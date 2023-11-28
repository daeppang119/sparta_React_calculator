import React from "react";
import styled from "styled-components";

function Display(props) {
  const value = props.value;

  return <Wrapper>{value}</Wrapper>;
}
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: span 4;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid #555;
  color: #fff;
  padding-right: 0.25rem;
`;

export default Display;
