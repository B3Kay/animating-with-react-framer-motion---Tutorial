# Animation with Framer-Moton

## Framer Motion:
https://www.framer.com/motion/


## EXTRA!!

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