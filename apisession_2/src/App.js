import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <Container>
      <SignUp/>
      <Login/>
    </Container>
    
  );
}

export default App;
