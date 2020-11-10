import React from "react";
// import { motion } from "framer-motion";
import { ListItem } from "./ListItem";

export const StaggeredList = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => (
        <ListItem exercice={item} />
      ))}
    </div>
  );
};
