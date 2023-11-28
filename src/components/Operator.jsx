import React from "react";
import styled from "styled-components";

function Operator(props) {
  const operator = props.operator;
  const handleClick = props.onClick;
  const gridColumn = props.gridColumn || 1;

  return (
    <Wrapper onClick={handleClick} gridColumn={gridColumn}>
      {operator}
    </Wrapper>
  );
}
const Wrapper = styled.button`
  background-color: #f89c5b;
  color: #fff;
  text-align: center;
  border: 1px solid #555;
  display: block;
  grid-column: span ${(props) => props.gridColumn};

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export default Operator;
