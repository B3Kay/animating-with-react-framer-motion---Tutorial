# Animation with Framer-Moton

# Tutorial

In this tutorial, I've prepared a project in true 80's synthwave feeling. Now during Covid-19 times it feels like are working mostly remotely and from home to many of us skip training and we are becoming slaves under the control of Netflix and other streaming services.

But thanks to Rocky🥊 and a bunch of other ripped 80's action heroes we are going to repair an old workout generator that's gonna make us as buff as the heroes of that time!🦸‍♂️🦸‍♀️(<3 Stalone, Arnold, Dolph!) 💪

The problem with Rocky's workout-generator is that's it's not animating, and like your thinking right now, were gonna fix it with Framer-Motion

![Let's do this](https://memegenerator.net/img/instances/48251556/lets-do-this.jpg)


## Framer Motion:

[Framer-Motion API](https://www.framer.com/api/motion/) because that's where I started.

Framer motion is the magic component that we are going to use today. Its name is `motion` and it extends all the native HTML tags like `div`, `a` and `ul` etc.

We can give the `motion` just a few "props" to magically make the `Framer-Motion` API do all the animation in the background. It's also 3d optimized to use the graphics card on your computer to make it really smooth.

In this tutorial, we are going to use a specific prop `variants` to orchestrate the rendering and animation av elements in a list. An example from the API: https://www.framer.com/api/motion/examples/#variants

### The repo

The documentation for this Tutorial can be found in [Tutorial English](https://github.com/B3Kay/animating-react-framer-motion/blob/demo-redy/TUTORIAL.EN.md)
To get going with the Tutorial I've prepared this repo, just change the branch to `Demo-ready` and you can just follow along. Or find the `repo` here [Animate-with-Framer-Motion](https://github.com/B3Kay/animating-react-framer-motion/tree/demo-redy).

The project is Bootstrapped with a simple CRA (Create React App) app that renders a Header, a slider to select the number of exercises and a switch to activate the training program. The app also has a few states and functions that we don't need to put any focus on for this tutorial.

App.js:

- Header - Name of the app
- Slider - Choose amount of exercises
- Switch - Starts the workout
- List - The list of exercises we need to _repair_(Animate).

Components we need to fix:

- StaggeredList - The list rendering the listItems
- ListItem - Each item in the list.

These components are already styled but you are free to do any changes you want. 😎


## 1. Create a list

Let's begin with creating a list, for sake of convenience we could create a list component and render 4 elements wrapped in a div.

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

The magic of Framer-Motion comes in when we use the `motion` components. Change the `div` to a `motion.div`. ListItem is a styled component that we want to render in our list. It will show our services. Ithe ListItem takes 3 props, exercise, index, and key. Key is needed for React and framer-motion to give the elements a stable identity. Good when there is a change in one or more elements in the list.

Magin med Framer-motion kommer in när vi använder `motion` componenterna. Så vi kan göra om `div` till en `motion.div`.
ListItem är en för stylad komponent som vi vill rendera i listan och visa upp våra övningar i. Den tar 2 props, exercice, index och key. Key behövs för React men även framer-motion för att kunna komma ihåg element och correkt animera dem.

## 2. Animate list

The next step is to tell motion how we want it to handle its children. We want to tell the children we got two states, open and closed. Motion helps us with the transition if we just tell it the two points to transition between.

We do this by adding a `variants` prop to the motion components.
This tells the list of how to control its children. When the state changes to `open` we want it to wait for 0.5s before it's starts rendering its children. Then we want it to wait for 0.3s between the render of each child. The same when we close it. Though we want to do it a little bit faster, I think it looks better that way. Direction is which way to start removing children.


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

The list takes a prop telling when the switch was pressed, to know if to render the items or not in the Workout generator. In the animate prop to motion, we tell it *if* `isOpen` animate to *open* otherwise animate to *closed*. We also set the initial state to *closed*

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

Now we're done with the list head over to the `ListItem` component!

## 3. Make listItem animate

List item looks like this, it is an item but we need to give it a few props to make it animate.

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
ListItem know the *variants* we added to the list component. What we need to do to animate this is to tell what the two states mean. What are variants of `open` and `closed`

To fix this we use the `variants` prop. Motion animate automatically between the most kind of values, opacity, scale, x, y, z, height, width, top left... More can be found here [Supported Values](https://www.framer.com/api/motion/component/#supported-values)

When the animation start I want the items to fade in and swoop in from the right. We do that by adding an `opacity` of 0 and moving the item a few pixels to the right with the `x`. When it's open we put it back to its default `x` position and `opacity`.

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

We should now be able to see the exercises and change the number of exercises we want! 

 - Let's get BUFF! 🥊🏆

If it doesn't work properly feel free to write an issue here in GitHub. 😘
You can also change the branch to demo-1 to see the finished result. The main branch has some extra goodies and just a WIP. Or head of to [this live demo at netlify](https://exercice-generator.netlify.app/)

Som extras! ☺

We can add some extra props to the items.
For example, we could change the scale onHover or tap by just adding a `while over` or `whileTap` prop.

```javascript
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
```

To add some extra sprinkles on the cake let's add an index prop. This has nothing to do with framer-motion, but we can also animate between style changes with styled-components.

```javascript
index={index}
```

All list items should now have an Epic 🌈 gradient!

HAPPY CODING! :)


## OTHER EXTRAS!!

### Celebration Text!

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
