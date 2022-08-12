import React from "react"
import Animated from 'react-native-reanimated';

import { Text } from "react-native-paper"
import SplashBG from "../../../features/SplashBG"
import Background from "../../../features/Background"
import Logo from "../../../features/logo"
import Button from "../../../features/Button"
import { COLORS } from "./theme";


export default function SplashScreen({ navigation }) {
  return (
    <SplashBG>
      <Logo />
      <Text>Its helluva start, lets hunt the heist.</Text>
      <Button mode="contained" onPress={() => navigation.navigate("StartScreen")} color='#F8772E'>
        Start
      </Button>
    </SplashBG>
  )
}
