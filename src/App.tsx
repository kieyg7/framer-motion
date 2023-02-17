import React, {useEffect, useRef, useState} from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion, AnimatePresence} from "framer-motion";

function App() {
  const [id, setId] = useState<null|string>(null)

  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {[1,2,3,4].map(i => <Box key={i} layoutId={i+""} onClick={() => setId(i+"")}/>)}

        </Grid>
        <AnimatePresence>
        {id
          ? <Overlay
            initial={{backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
            animate={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
            exit={{backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
            transition={{duration: .3}}
            onClick={() => setId(null)}
          >
            <Box layoutId={id} style={{width: '400px', height: '200px'}}/>
          </Overlay>
          : null
        }
        </AnimatePresence>
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
  justify-content: space-around;
  align-items: center;
`

const Grid = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  div:first-child, div:last-child {
    grid-column: span 2;
  }

`
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px, rgba(0, 0, 0, 0.06);
 `


export default App;
