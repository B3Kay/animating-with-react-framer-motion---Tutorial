import React from "react";
import { motion } from "framer-motion";
import { ListItem } from "./ListItem";

// How to become strong like a 80s action hero / Van Dam / Arnold / Dolph lundgren, kanske en bild på doffe.

const collection = ["Burpee", "Push up", "Squat", "Pullup"];

const variants = {
  open: {
    transition: { staggerChildren: 0.3, delayChildren: 0.07 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const StaggeredList = ({ isOpen }) => {
  return (
    <motion.div variants={variants} animate={isOpen ? "open" : "closed"}>
      {collection.map((item, index) => (
        <ListItem name={item} index={index} key={index} />
      ))}
      {/* <motion.li variants={item}>Item 1</motion.li>
        <motion.li variants={item}>Item 2</motion.li>
        <motion.li variants={item}>Item 3</motion.li> */}
    </motion.div>
  );
};
