import React from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";
import { motion } from "framer-motion";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

const StyledThumb = styled(motion.div)`
  height: 50px;
  line-height: 50px;
  width: 50px;
  top: -13px;
  text-align: center;
  background-color: #ffffff;
  color: #000;
  font-weight: 700;
  border-radius: 50%;
  cursor: grab;
`;

const Thumb = (props, state) => (
  <StyledThumb whileHover={{ scale: 1.2 }} {...props}>{state.valueNow}</StyledThumb>
);

const getColor = (props, state) => {
  if (props.value >= 8)
    return "linear-gradient(to left, #333399, #ff00cc)";
  return props.index === 1 ? "rgba(255, 255, 255, 0.4)" : "#00e1ff";
};

const StyledTrack = styled(motion.div)`
  top: 0;
  bottom: 0;
  background: ${(props) => getColor(props)};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props}{...state} index={state.index} />;

export const Slider = (props) => {
  return <StyledSlider {...props} renderTrack={Track} renderThumb={Thumb} />;
};
