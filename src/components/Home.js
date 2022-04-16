import React from "react";
import styled from "styled-components";

const Every = styled.button`
  width: 100%;
  height: 20rem;
  background-color: #8b0000;
`;

const Cadastro = styled.button`
  width: 40%;
  height: 2em;
  background-color: black;
  color: #ffffff;
  font-size: 2em;
  margin-bottom: 6em;
  margin-left: 3em;
`;

const Login = styled.button`
  width: 40%;
  height: 2em;
  background-color: #00bfff;
  color: #ffffff;
  font-size: 2em;
`;

function Home() {
  return (
    <Every>
      <Cadastro>Cadastre-se</Cadastro>
      <Login>Login</Login>
    </Every>
  );
}

export default Home;
