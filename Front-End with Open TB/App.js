import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, NativeModules } from 'react-native';
const { UIManager } = NativeModules;


import Animated from 'react-native-reanimated';
import UserLoginScreen from "./app/screen/auth/UserLoginScreen"
import ShopTab from "./app/screen/shop/ShopTab"
import RegistrationScreen from "./app/screen/auth/RegistrationScreen"
import SendPasswordResetEmailScreen from "./app/screen/auth/SendPasswordResetEmailScreen"
import UserPanelTab from "./app/screen/UserPanelTab"
import { store } from "./app/store"
import { Provider } from "react-redux"
import React from "react"
import SplashScreen from "./app/screen/auth/SplashScreen"
import StartScreen from "./features/StartScreen"
import qrcodee from './app/screen/auth/qrcodee'
import Quiz1 from "./app/screen/auth/Quiz1"
import Instructions from "./app/screen/auth/InstructionsScreen"
import InstructionsScreen02 from "./app/screen/auth/InstructionsScreen02"
import upload from "./app/screen/auth/upload"
import DashboardScreen from './app/screen/DashboardScreen.js';


const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="qrcodee" component={qrcodee} options={{ headerShown: false }}/>
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Instructions" component={Instructions} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
     

        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Quiz1" component={Quiz1} options={{ headerShown: false }} />
        <Stack.Screen name="SendPasswordResetEmail" component={SendPasswordResetEmailScreen} options={{ title: "Forgot Password" }} />
        <Stack.Screen name="upload" component={upload} options={{ headerShown: false }} />
        <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ headerShown: false }} />
        <Stack.Screen name="InstructionsScreen02" component={InstructionsScreen02} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
