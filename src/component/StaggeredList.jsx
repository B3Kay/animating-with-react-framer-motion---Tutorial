import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { ListItem } from "./ListItem";
import styled from "styled-components";

// equipment: "Body Weight"
// example: "200.gif (https://dl.airtable.com/Y0JUbM2YTfe8uRz0jb5w_200.gif)"
// exercise: "Bicycle Crunch"
// exercise_type: "Weight"
// major_muscle: "Core"
// minor_muscle: null
// modifications: "Easier: Move Slower, Legs higher in the air↵Harder: Keep shoulder blades off the ground entire time"
// notes: "The lower the "straight" leg is to the ground the more challenging this exercise is. "

const variants = {
  open: {
    // transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterCildren",
    },
  },
};

const StyledList = styled(motion.div)``;

export const StaggeredList = ({ list, isOpen = false, callback }) => {
  return (
    <AnimateSharedLayout>
      <StyledList
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        onAnimationComplete={() => !isOpen && callback()}
        layout
      >
        {list.map((item, index) => (
          <ListItem exercice={item} index={index} key={item.exercice} />
        ))}
      </StyledList>
    </AnimateSharedLayout>
  );
};
