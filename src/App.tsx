import React from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion} from "framer-motion";

const boxVariants = {
  start: {opacity: 0, scale: 0},
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type:'spring',
      duration: 0.5,
      bounce: 0.5,
      staggerChildren: 0.2,
    }}
}

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <Box variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
        </Box>
      </Wrapper>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding-top: 40px;
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
    background: linear-gradient(135deg, #e09, #d0e);
  }
  a {
    text-decoration:  none;
    color: inherit;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius:  35px;
  background-color: white;
  place-self: center;
`

export default App;
