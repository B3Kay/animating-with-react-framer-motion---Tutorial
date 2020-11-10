import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColors } from "../helper/gradient";
import { ColorHighligt } from "../App";

const StyledMotion = styled(motion.div)`
  ${(props) => bgColors[props.index]}
  /* background-color: #3a3c5b; */
  padding: 2rem;
  padding-left: 3rem;
  /* border-radius: 1.5rem; */

  color: white;

  display: block;
  text-decoration: none;

  font-weight: 500;
  text-transform: uppercase;
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

const StyledListItem = styled(motion.div)`
  background-color: rgb(39 47 60);
  /* border-radius: 1.5rem; */
  overflow: hidden;
  margin-bottom: 1rem;
`;

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
      // whileTap={{ scale: 0.95 }}
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

const InfoMotionDiv = styled(motion.div)`
  padding: 1rem 2rem;
`;

const Info = ({ img, major_muscle, modifications, notes }) => {
  return (
    <InfoMotionDiv
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledInfoRow>
        <ColorHighligt>Muscle groups:</ColorHighligt> {major_muscle}
      </StyledInfoRow>
      <StyledInfoRow>
        <ColorHighligt>Modifications:</ColorHighligt> {modifications}
      </StyledInfoRow>
      <StyledInfoRow>
        <ColorHighligt>Notes:</ColorHighligt> {notes}
      </StyledInfoRow>
      <StyledInfoRow>
        <a href={img} target="_blank" style={{ color: "white" }}>
          Img
        </a>
      </StyledInfoRow>
    </InfoMotionDiv>
  );
};

const StyledInfoRow = styled.div`
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;
