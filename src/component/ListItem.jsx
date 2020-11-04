import React from "react";
import { motion } from "framer-motion";
// import styled from "styled-components";

// "linear-gradient(45deg, rgba(101,13,137) 0%, rgba(2,55,136) 100%)",
// "linear-gradient(45deg, rgba(212,0,120,1) 0%, rgba(38,20,71,1) 100%)",
// "linear-gradient(45deg, rgba(36,23,52,1) 0%, rgba(46,33,87,1) 100%)",
const bgColors = [
  "linear-gradient(45deg, rgba(186, 109, 243) 0%, rgba(246,1,157) 100%)",
  "linear-gradient(45deg, rgba(45,226,230,1) 0%, rgba(255,56,100,1) 100%)",
  "linear-gradient(45deg, rgba(255,108,17) 0%, rgba(246,1,157,1) 100%)",
  "linear-gradient(45deg, rgba(246,1,157) 0%, rgba(212,0,120) 100%)",
];

const style = {
  padding: "2rem",
  borderRadius: "1.5rem",
  marginBottom: "1rem",
  background: "rgb(45,226,230)",
  color: "white",
};

const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: 150 },
};

export const ListItem = ({ name, index }) => {
  style.background = bgColors[index];
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ ...style }}
    >
      {name}
    </motion.div>
  );
};
