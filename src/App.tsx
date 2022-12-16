import React from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion} from "framer-motion";

const myVars = {
  start: {scale: 0},
  end: {scale: 1, rotateZ: 360, transition: {type:'spring', duration: 2, delay: 1}}
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <Box variants={myVars} initial="start" animate="end"/>
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
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

export default App;
