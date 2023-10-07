import React from 'react';
import { Container, Mensagem as StyledMensagem } from './styles';

type ListEmptyProps = {
    Mensagem: string; // Renomeie a propriedade para 'Mensagem' em vez de 'message'
}

const ListEmpty = ({ Mensagem }: ListEmptyProps) => {
    return (
        <Container>
            <StyledMensagem>
                {Mensagem}
            </StyledMensagem>
        </Container>
    );
}

export default ListEmpty;