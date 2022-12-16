import React, {useEffect, useRef, useState} from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion, AnimatePresence} from "framer-motion";

function App() {

  const [visible, setVisible] = useState(1);

  const [direction, setDirection] = useState(true)

  const next = () => {
    setDirection(true);
    setVisible((prev) => prev === 10 ? 10 : prev + 1)
  }
  const prev = () => {
    setDirection(false);
    setTimeout(() => setVisible((prev) => prev === 1 ? 1 : prev - 1), 10)

  }

  const boxVariants = {
    entry: (direction: boolean) => ({
      x: direction ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {duration: 0.5, delay: 0.1}
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      // transition: {duration: 1}
    },
    exit: (direction: boolean) => ({
      x: direction ? -500 : 500,
      opacity: 0,
      scale: 0,
      transition: {duration: 0.5, delay: 0.1}
    })
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence custom={direction} mode="popLayout">
          <Box
              custom={direction}
              variants={boxVariants}
              initial='entry'
              animate="center"
              exit='exit'
              transition={{type:"spring", bounce: 0.3}}
              key={visible}
            >
            {visible}
          </Box>
          </AnimatePresence>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </Wrapper>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
  }
  a {
    text-decoration:  none;
    color: inherit;
  }
`

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  button {
    //position: absolute;
    //top: 50px;
    //left: 50%;
    //transform: translateX(-50%);
  }
`

const Box = styled(motion.div)`
   width: 200px;
   height: 200px;
   background-color: white;
   border-radius: 15px;
   box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 100px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
 `


export default App;
