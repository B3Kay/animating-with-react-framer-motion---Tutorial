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

const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 150,
  },
};

export const ListItem = ({ exercice, index }) => {
  return (
    <StyledMotion
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: 50 }}
      index={index}
    >
      {exercice.exercise}
    </StyledMotion>
  );
};
