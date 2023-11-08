import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, ButtonIconTypeStyleProps } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
// import {House} from 'phosphor-react-native'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps;
}

export const ButtonIcon = ({icon, type = "PRIMARY", ...rest}:Props) => {
  return (
    <Container {...rest}>
        <Icon 
          name={icon} 
          type={type}/>
    </Container>
  )
}
