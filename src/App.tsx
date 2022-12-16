import React, {useEffect, useRef, useState} from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion, AnimatePresence} from "framer-motion";

function App() {

  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing(!showing);
  }

  const boxVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: -500,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 360,
      y: 0,
    },
    leaving: {
      opacity: 0,
      scale: 0,
      y: -500,
      transition: {duration: .5}
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <button onClick={toggleShowing}>Toggle</button>
        <AnimatePresence>{showing
          ? <Box
              variants={boxVariants}
              initial={"initial"}
              animate={"visible"}
              exit={"leaving"}
              transition={{type:"spring", bounce: 0.3}}
          />
          : null}</AnimatePresence>
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
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Box = styled(motion.div)`
   width: 200px;
   height: 200px;
   background-color: white;
   border-radius: 15px;
   box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
 `


export default App;
