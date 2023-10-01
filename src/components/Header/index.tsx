import React from 'react'
import { Container, Logo, BackIcon, BackButton } from './styles'
import logoImg from '@assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean;
}

const Header = ({showBackButton = false}:HeaderProps) => {
  return (
    <Container>
      {showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
        <Logo source={logoImg}/>
    </Container>
  )
}

export default Header