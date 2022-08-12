import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export const COLORS = {
  primary: "#F8772E",
  secondary: "#F8772E",
  accent: "#F8772E",

  success: "#00C851",
  error: "#ff4444",

  black: "#171717",
  white: "#fefae0",
  //background: "#252C4A"
}

export const SIZES = {
  base: 10,
  width,
  height,
}
