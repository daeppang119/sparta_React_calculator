import React, { useState } from "react";
import styled from "styled-components";
import Number from "./components/Number";
import Operator from "./components/Operator";
import Display from "./components/Display";

// currentValue 현재 입력중인 값
// beforeValue 직전에 입력한 값

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);
  const [clickedOperator, setClickedOperator] = useState(null);

  const handleClickNumber = (number) => {
    if (isOperatorClicked) {
      setCurrentValue(number);
      setIsOperatorClicked(false);

      return;
    }
    // number를 가지고 무언가 한다.
    // alert(number);
    setCurrentValue(currentValue * 10 + number);
  };

  const handleClickAC = () => {
    setCurrentValue(0);
    setPreviousValue(0);
    setIsOperatorClicked(false);
    setClickedOperator(null);
  };

  const handelClickOperator = (opterator) => {
    setIsOperatorClicked(true);
    setClickedOperator(opterator);
    setPreviousValue(currentValue);
  };

  const handelClickCalculate = () => {
    if (!clickedOperator) return;

    let result;

    switch (clickedOperator) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "x":
        result = previousValue * currentValue;
        break;
      case "÷":
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setCurrentValue(result);
    setPreviousValue(0);
    setClickedOperator(null);
  };

  return (
    <>
      {previousValue} {clickedOperator}
      <Wrapper>
        <Display value={currentValue}></Display>
        <Operator operator={"AC"} onClick={handleClickAC} gridColumn={3} />
        <Operator operator={"÷"} onClick={() => handelClickOperator("÷")} />
        <Number number={7} onClick={() => handleClickNumber(7)} />
        <Number number={8} onClick={() => handleClickNumber(8)} />
        <Number number={9} onClick={() => handleClickNumber(9)} />
        <Operator operator={"x"} onClick={() => handelClickOperator("x")} />
        <Number number={4} onClick={() => handleClickNumber(4)} />
        <Number number={5} onClick={() => handleClickNumber(5)} />
        <Number number={6} onClick={() => handleClickNumber(6)} />
        <Operator operator={"-"} onClick={() => handelClickOperator("-")} />
        <Number number={1} onClick={() => handleClickNumber(1)} />
        <Number number={2} onClick={() => handleClickNumber(2)} />
        <Number number={3} onClick={() => handleClickNumber(3)} />
        <Operator operator={"+"} onClick={() => handelClickOperator("+")} />
        <Number
          number={0}
          onClick={() => handleClickNumber(0)}
          gridColumn={3}
        />
        <Operator operator={"="} onClick={handelClickCalculate} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem 2rem 2rem 2rem;
  grid-template-rows: 2rem 2rem 2rem 2rem 2rem 2rem;
`;

export default App;
