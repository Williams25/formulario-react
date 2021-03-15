import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { Container, Typography, Box } from "@material-ui/core";

import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

import { validarCPF, validarSenha } from "./models/cadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Box mt="2rem">
          <Typography variant="h3" component="h1" align="center">
            Formulário de cadastro
        </Typography>
          <ValidacoesCadastro.Provider
            value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
          >
            <FormularioCadastro aoEnviar={aoEnviarForm} />
          </ValidacoesCadastro.Provider>
        </Box>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
