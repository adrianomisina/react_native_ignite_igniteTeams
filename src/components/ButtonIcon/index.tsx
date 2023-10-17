import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";
// import { MaterialIcons } from '@expo/vector-icons';
// import {House} from 'phosphor-react-native'

type Props = TouchableOpacityProps & {

}

export const ButtonIcon = ({}:Props) => {
  return (
    <Container>
        <Icon name="home"/>
    </Container>
  )
}
