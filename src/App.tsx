import React, {useState} from 'react';
import './styles/reset.css';
import styled, {createGlobalStyle} from 'styled-components'
import {motion, AnimatePresence} from "framer-motion";

function App() {
  const [id, setId] = useState<null|string>(null)
  const [ballPos, setBallPos] = useState<string>("2")
  const whileHover : {[key: string]: any} = {
  "1": {scale: 1.1, translate : '-5% -5%'},
  "2": {}, //{scale: 1.1, translate : '5% -5%'},
  "3": {}, //{scale: 1.1, translate : '-5% 5%'},
  "4": {scale: 1.1, translate : '5% 5%'},
}


  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {["1","2","3","4"].map(i => <Box key={i} transition={{duration: .1}} whileHover={{...whileHover[i]}} layoutId={i} onClick={() => setId(i)}>
            {i === ballPos && <Dot
                layoutId={"dot"}
                initial={{top: 'calc(50% - 25px)', left: 'calc(50% - 25px)'}}
            />}
          </Box>)}
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
            <Box layoutId={id} style={{width: '300px', height: '300px', backgroundColor: '#fff'}}/>
          </Overlay>
          : null
        }
        </AnimatePresence>
        <SwitchBtn whileTap={{scale: 1.1, color: 'red'}} onClick={() => setBallPos(ballPos === '2' ? '3' : '2')}>Switch</SwitchBtn>
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
`

const Grid = styled.div`
  max-width: 50vw;
  min-width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width :560px) {
   min-width: 90%;
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
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: #f69ff0;
  position: relative;
`
const Dot = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  background-color: #fff;
  z-index: 10;
`;
const SwitchBtn = styled(motion.button)`
  margin-top: 30px;
  padding: 10px 15px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  color: blue;
`;

export default App;
