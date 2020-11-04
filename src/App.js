import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import { StaggeredList } from "./component/StaggeredList";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

const Modal = ({ isOpen, setOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translate3d(-50%,0,0)",
          }}
        >
          <motion.div initial={{ x: 50 }} animate={{ x: 0 }} exit={{ x: -50 }}>
            <button onClick={() => setOpen((prevRes) => (prevRes ? 0 : 1))}>
              Close Modal
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>

      <Container>
        <h2>Super Cool</h2>

        <CardGrid>
          <button onClick={() => setOpen((prevRes) => !prevRes)}>
            Toggle Modal
          </button>
        </CardGrid>
        {<StaggeredList isOpen={isOpen} />}
      </Container>
    </div>
  );
}

export default App;
