import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { bgColors } from "../helper/gradient";
import {Info} from './Info';

const StyledMotion = styled(motion.div)`
  ${(props) => bgColors[props.index]}
  padding: 2rem;
  padding-left: 3rem;
  color: white;
  display: block;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
`;

const StyledListItem = styled(motion.div)`
  background-color: rgb(39 47 60);
  overflow: hidden;
  margin-bottom: 1rem;
`;

const variants = {
  open: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.3,
    },
  }),
  closed: {
    opacity: 0,
    x: 150,
  },
};



export const ListItem = ({ exercice, index }) => {
  const regex = /\((.*?)\)/;
  const res = regex.exec(exercice.example);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <StyledListItem
      variants={variants}
      initial={variants.closed}
      custom={index}
      whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      index={index}
      layout
      onClick={toggleOpen}
    >
      <StyledMotion index={index} layout style={{ fontSize: "1rem" }}>
        {exercice.exercise}
      </StyledMotion>
      {isOpen && <Info img={res[1]} {...exercice} />}
    </StyledListItem>
  );
};
