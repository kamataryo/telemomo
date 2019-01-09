import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  font-size: 36px;
  outline: none;

  &:active {
    background-color: gray;
    color: white;
  }
`;

export default Button;
