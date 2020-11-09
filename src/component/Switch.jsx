import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";


const ContainerDiv = styled.div`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  width: 150px;
  background: ${(props) =>
    props.isOn
      ? "linear-gradient(to left, #b91d73, #f953c6)"
      : "rgba(255, 255, 255, 0.4)"};
  display: flex;
  justify-content: ${(props) => (props.isOn ? "flex-end" : "flex-start")};
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
`;

const HandleCircle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
`;

export const Switch = ({ onChange }) => {
  const [isOn, setOn] = useState(false);

  const toggle = () => {
    setOn(!isOn);
    onChange(isOn);
  };

  return (
    <ContainerDiv isOn={isOn} onClick={toggle}>
      <HandleCircle
        whileHover={{ scale: 1.2 }}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </ContainerDiv>
  );
};