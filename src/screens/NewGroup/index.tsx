import React from 'react';
import Header from '@components/Header';
import { Container, Content, Icon } from './styles';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import Input from '@components/Input';

const NewGroup = () => {
  return (
    <Container>
        <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title='Nova turma'
                    subtitle='crie a turma para adicionar as pessoas'
                />

                <Input 
                  placeholder="Nova turma"
                />

                <Button 
                    title ="Criar"
                    style={{marginTop: 20}}
                />
            </Content>
    </Container>
  )
}

export default NewGroup