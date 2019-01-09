import React from "react";
import styled from "styled-components";

const createHead = level => styled[`h${level}`]`
  color: white;
`;

export const Section = ({ title, level }) => {
  const Header = createHead(level);
  return <Header>{title}</Header>;
};

export default Section;
