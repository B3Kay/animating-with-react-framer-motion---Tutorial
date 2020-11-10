import React, { useState } from "react";
import { Container } from "./Elements";
import { motion } from "framer-motion";
import { StaggeredList } from "./component/StaggeredList";
import { Slider } from "./component/Slider";
import styled from "styled-components";
import { Switch } from "./component/Switch";
import { sample } from "underscore";
import data from "./data/exercice";

export const ColorHighligt = styled(motion.span)`
  background: linear-gradient(to left, #ff1d68, #b500e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-transform: uppercase;
  font-weight: 900;
`;

const FinnishText = styled(ColorHighligt)`
  font-style: italic;
`;

const Header = styled.h1`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 6rem;
  margin-bottom: 16px;
  line-height: 1;
`;

const SubHeader = styled.h2`
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 3rem;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.label`
  margin-bottom: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
`;

const bodyWeightData = data.filter((item) => item.equipment === "Body Weight");

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isAlreadyDone, setDone] = useState(false);
  const initialEx = 1;
  const [exercicesAmount, setExercicesAmount] = useState(initialEx);

  const getSubset = () => sample(bodyWeightData, exercicesAmount);
  const [list, setlist] = useState(getSubset());

  const updateList = () => setlist(getSubset());

  const handleOpen = () => {
    if (!isOpen) updateList();
    setOpen((prevRes) => !prevRes);
    setDone(false);
  };

  return (
    <Container>
      <Header>
        Exercice <ColorHighligt>generator</ColorHighligt>
      </Header>

      <SubHeader>Beach-Body-202X</SubHeader>

      <SliderWrapper>
        <StyledLabel>You have choosen {exercicesAmount} exercices</StyledLabel>
        <Slider
          defaultValues={initialEx}
          onChange={(val) => {
            setExercicesAmount(val);
            if (!isOpen) setlist(getSubset());
          }}
          marks
          min={1}
          max={8}
        />
      </SliderWrapper>

      <Switch onChange={(isOn) => handleOpen(isOn)} />

      {/* {isAlreadyDone && (
        <Header>
          <FinnishText>FINISHED!</FinnishText>
        </Header>
      )} */}
      {/* LISTAN */}
      {/* LISTAN */}
      {/* LISTAN */}
      {/* LISTAN */}
      {
        <StaggeredList
          list={list}
          isOpen={isOpen}
          callback={() => setDone(true)}
        />
      }
    </Container>
  );
}

export default App;
