import React, {useRef} from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion} from "framer-motion";

const boxVariants = {
  hover: {scale: 1.5, rotateZ: 90},
  click: {scale: 1, borderRadius: "50%"},
  drag: {backgroundColor: "rgb(46, 204, 133)", transition: {duration: 3}},
}


function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            variants={boxVariants}
            whileHover="hover"
            whileTap="click"
            whileDrag="drag"
            drag
            dragConstraints={biggerBoxRef}
            dragSnapToOrigin
            dragElastic={0}
          />
        </BiggerBox>
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
  overflow: hidden;
`
export default App;
