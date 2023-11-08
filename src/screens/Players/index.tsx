import React from "react"
import { Container, Form } from "./styles"
import { ButtonIcon } from "@components/ButtonIcon"
import Input from '@components/Input'
import Header from "@components/Header"
import Highlight from "@components/Highlight"

export function Players() {
  return (
    <Container>
        <Header showBackButton />

        <Highlight
            title="Nome da turma"
            subtitle="adicione a galera e separe os times."
        />

        <Form>
          <Input
            placeholder="Nome da pessoa"
            autoCorrect={false}
          />

          <ButtonIcon icon="add" />
        </Form>
    </Container>
  )
}
