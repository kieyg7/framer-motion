import React, {useEffect, useRef} from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion, useMotionValue, useTransform, useScroll} from "framer-motion";

const boxVariants = {
  hover: {scale: 1.5, rotateZ: 90},
  click: {scale: 1, borderRadius: "50%"},
  drag: {backgroundColor: "rgb(46, 204, 133)", transition: {duration: 3}},
}


function App() {
  const x = useMotionValue(0)
  const rotateZ = useTransform(x, [-800, 800], [-360, 360])
  const gradient = useTransform(x, [-800, 800], [
    'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 200))',
    'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))'
  ])
  const {scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper style={{background: gradient}}>
          <Box
            drag
            dragSnapToOrigin
            style={{x, rotateZ, scale}}
          />
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
  height: 200vh;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, .4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
`
export default App;
