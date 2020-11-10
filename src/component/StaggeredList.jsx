import React from "react";
// import { motion } from "framer-motion";
import { ListItem } from "./ListItem";

export const StaggeredList = ({ list, isOpen = false }) => {
  return (
    <div>
      {[1, 2, 3, 4].map((item, index) => (
        <ListItem exercice={item} index={index} key={item.exercice} />
      ))}
    </div>
  );
};
