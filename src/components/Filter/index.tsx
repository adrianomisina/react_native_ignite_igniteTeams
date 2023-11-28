import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, FilterStyleProps } from './style';

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

const Filter = ({title, isActive = false, ...rest}:Props) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Filter;