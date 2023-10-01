import React from 'react';
import { Container, Icon, Title } from './style';
import { TouchableOpacityProps } from 'react-native';

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

const GroupCard: React.FC<GroupCardProps> = ({ title, ...rest}) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
