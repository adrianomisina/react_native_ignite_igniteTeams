import React from 'react'
import { Container, Title, SubTitle } from './style'

interface HighlightProps {
    title: string;
    subtitle: string;
}

const Highlight = ({title, subtitle}:HighlightProps) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  )
}

export default Highlight