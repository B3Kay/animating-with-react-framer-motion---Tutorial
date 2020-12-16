import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ColorHighligt } from "../App";

const InfoMotionDiv = styled(motion.div)`
  padding: 1rem 2rem;
`;

export const Info = ({ img, major_muscle, modifications, notes }) => {
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
        <a href={img} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
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
