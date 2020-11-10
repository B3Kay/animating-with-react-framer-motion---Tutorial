import React from "react";
import { motion } from "framer-motion";
import { ListItem } from "./ListItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const StaggeredList = ({ list, isOpen = false }) => {
  return (
    <motion.div
    variants={variants}
    animate={isOpen ? "open" : "closed"}
    initial="closed"
    >
      {list.map((item, index) => (
        <ListItem exercice={item} index={index} key={item.exercice} />
      ))}
    </motion.div>
  );
};
