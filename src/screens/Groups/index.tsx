import React from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";

const Groups = () => {
  return (
    <Container>
      <Header />
      <Highlight 
        title = "Turmas"
        subtitle = "jogue com sua turma"
      />
    </Container>
  );
};

export default Groups;
