import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { bgColors } from "../helper/gradient";

const StyledMotion = styled(motion.div)`
  ${(props) => bgColors[props.index]}
  background-color: rgb(39 47 60);
  padding: 2rem;
  padding-left: 3rem;
  color: white;
  display: block;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ListItem = ({ exercice, index }) => {
  return <StyledMotion>{exercice.exercise}</StyledMotion>;
};
