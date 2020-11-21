# Animation with Framer-Moton

## Framer Motion:

https://www.framer.com/motion/

Framer Motion har en component som är lite magisk som vi kommer att använda oss av idag. Denna heter `motion`, den extendar alla html taggar som `div`, `a` och `ul` etc.

Denna kan vi ge ett gäng props och på ett magiskt sätt ser `React-framer` till att den magiska animeringen sker i bakgrunden utan att vi behöver bry oss så mycket.

I denna tutorial kommer jag visa hur man kan använda sig av proppen `variants` för att dirigera renderingen av element i en lista. Ett exempel finns här: https://www.framer.com/api/motion/examples/#variants

# Tutorial

I denna tutorial har jag förberett ett projekt i äkta True Survivor och synthwave känsla. Så här vid Covid-19 och corona tider känns det som många arbetar hemifrån, kanske skippat att träna och börjar förslavas under soffans kontroll.

Därför vill Rocky🥊 att vi skall laga hans workout - generator. Denna kommer göra kunna göra oss lika rippade som 80-talets action hjältar🦸‍♂️🦸‍♀️(<3 Stalone, Arnold, Dolph!) 💪

Problemet med Rockys Workout-Generator är att den inte animerar in listan. Vi ska laga detta med Framer-Motion.

Projektet består av en simpel CRA (Create React App) med en app som renderar en Header, en slider för att välja antalet övningar och en switch för att aktivera tränings-programmet. Appen har även lite states och functioner som inte vi behöver ha så mycket att göra.

App.js renderar:

- Header - Namnet på appen
- Slider - Välja antalet övningar
- Switch - Starta workout
- List - Lista av övningar som vi behöver laga(Animera).

Componenter vi behöver laga:

- StaggeredList - En lista som renderar övningarna
- ListItem - Vardera övning i listsan som skall renderas.

Dessa komponenter är färdig stylade och ingår inte i Tutorialen.

## 1. Create a list

Vi börjar med att skapa en lista. För enkelhetens skull kan vi börja att skapa en list komponent och rendera 4 element wrappade i en div.

```javascript
import React from "react";
import { motion } from "framer-motion";
import { ListItem } from "./ListItem";

export const StaggeredList = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item, index) => (
        <ListItem exercice={item} index={index} key={item.xercice} />
      ))}
    </div>
  );
};
```

## 2. Add motion

Magin med Framer-motion kommer in när vi använder `motion` componenterna. Så vi kan göra om `div` till en `motion.div`.
ListItem är en för stylad komponent som vi vill rendera i listan och visa upp våra övningar i. Den tar 2 props, exercice, index och key. Key behövs för React men även framer-motion för att kunna komma ihåg element och correkt animera dem.

## 2. Animate list

Nästa steg är att berätta för motion hur vi vill behandla listans barn. Vi vill berätta för alla dess barn vilka lägen som finns och när dem skall rendera mellan öppet och stängt läge. Motion räknar själv ut hur animeringen skall gå till. Vi behöver endast ge den 2 punkter och den animerar emellan.

Vi gör detta genom att lägga in `variants` i motion komponenten.
Här berättar vi hur vi vill att listan skall hantera sina barn. När statet ändras till `open` vill vi vänta 0.5s innan vi börjar rendera barn. Sedan vill vi vänta 0.3s mellan varje. Samm gäller när vi stänger. Dock lite fortare, 0.05s mellan varje barn. Direction är vilket håll vi vill börja plocka bort barn.

```javascript
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
```

I listan tar vi in en prop som säger att switch knappen är på eller ej i Workout generatorn. `isOpen` kan vi lägga in animate för att berätta när den ska animera mellan `open` och `closed`. Initial säger i vilket läge vi vill börja.

```javascript
export const StaggeredList = ({ list, isOpen = false }) => (
  <motion.div
    variants={variants}
    animate={isOpen ? "open" : "closed"}
    initial="closed"
  >
    {[1, 2, 3, 4].map((item, index) => (
      <ListItem exercice={item} index={index} key={item.exercice} />
    ))}
  </motion.div>
);
```

## 3. Make listItem animatable

List item ser just nu ut såhär. Det är endast ett item men vi behöver ge den några props för att den skall kunna animera.
`StyledMotion` är endast en `motion.div` som jag stylat med `Styled-Components`.

```javascript
export const ListItem = ({ exercice, index }) => {
  return 
    (<StyledMotion 
      index={index}
    >
      {exercice.exercise}
    </StyledMotion>);
};
```

Vårat listItem känner till dem två varianterna vi har lagt till i list komponenten. Det vi behöver göra för att den ska kunna animera är att berätta för den hur vi vill att dem 2 olika lägena `open` och `closed` skall vara.

Vi behöver därför i `variants` proppen till listItem berätta vilka dessa lägen är. Motion animerar automatiskt de flesta världen som opacitet, skala och x,y världen. När elementen animeras fram vill jag att de skall fade:a in och svepa in från höger. Hur vi säger det till motion gör vi påd detta vis:

```javascript
const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 150,
  },
};

export const ListItem = ({ exercice, index }) => {
  return (
    <StyledMotion
      variants={variants}

      index={index}
    >
      {exercice.exercise}
    </StyledMotion>
  );
};
```

### Finishing touches

If we test now it should animate 4 boring list items. So we need to go back to the List and tell it to render the workout-list instead.

We should now be able to see the exercices and change the amount of exercices we want! 

 - Let's get BUFF! 🥊🏆

Som extras! ☺

We can add some extra props to the items.
For example we could change the scale on over or tap by just adding a `whileHover` or `whileTap` prop.

```javascript
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
```

To add some extra sprincles on the cake let's add an index prop. This has nothing to do with framer-motion, but we can also animate between style changes with styled-components.

```javascript
index={index}
```

All list items should now have an Epic 🌈 gradient!

HAPPY CODING! :)

## OTHER EXTRAS!!

### Celebrate!

There is an onAnimationComplete callback function to run when a animation is completed.

```javascript
onAnimationComplete={() => !isOpen && callback()}

const [isAlreadyDone, setDone] = useState(false);
{
  isAlreadyDone && (
    <Header>
      <FinnishText>FINISHED!</FinnishText>
    </Header>
  );
}

const FinnishText = styled(ColorHighligt)`
  font-style: italic;
`;
```

### List Info

```javascript
  const regex = /\((.*?)\)/;
  const res = regex.exec(exercice.example);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <StyledListItem
      ...
      onClick={toggleOpen}
    >
      <StyledMotion />
      {isOpen && <Info img={res[1]} {...exercice} />}
    </StyledListItem>
  );
```

## API

// equipment: "Body Weight"
// example: "200.gif (https://dl.airtable.com/Y0JUbM2YTfe8uRz0jb5w_200.gif)"
// exercise: "Bicycle Crunch"
// exercise_type: "Weight"
// major_muscle: "Core"
// minor_muscle: null
// modifications: "Easier: Move Slower, Legs higher in the air↵Harder: Keep shoulder blades off the ground entire time"
// notes: "The lower the "straight" leg is to the ground the more challenging this exercise is. "
