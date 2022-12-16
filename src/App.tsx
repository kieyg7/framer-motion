import React, {useEffect, useRef, useState} from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion, AnimatePresence} from "framer-motion";

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked(!clicked)
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper onClick={toggleClicked}>
        <Box>{clicked ? <Circle layoutId="circle" style={{borderRadius: '50%'}}/> : null}</Box>
        <Box>{clicked ?  null : <Circle layoutId="circle" style={{borderRadius: 0}}/>}</Box>

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
  flex-flow: row;
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
   width: 300px;
   height: 300px;
  margin: 60px;
   background-color: white;
   border-radius: 15px;
   box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
 `
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

export default App;
