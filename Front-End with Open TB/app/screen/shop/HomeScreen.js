import { View, Text, TouchableWithoutFeedback } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import Background from "../../../features/Background"
import { Card } from "react-native-paper"
import Logo from "../../../features/logo"

const HomeScreen = () => {
  const navigation=useNavigation()
  return (
    <Background>
      <Logo/>
    <SafeAreaView>
      <Card>
        <Card.Content>
    <View>
      
        <TouchableWithoutFeedback onPress={()=> {navigation.navigate('Registration')}}>
      <Text style={{ fontSize: 34, fontWeight: "bold" }}>HomeScreen</Text>
      {/* <Text style={{ fontSize: 30, fontWeight: "bold" }}>All Products</Text> */}
    </TouchableWithoutFeedback>
        
     
      
   
      
    
    </View>
    <br />
    <View>
      
   
    <TouchableWithoutFeedback onPress={()=> {navigation.navigate('UserLogin')}}>
      <Text style={{ fontSize: 34, fontWeight: "bold", textAlign: 'center' }}>Login</Text>
      {/* <Text style={{ fontSize: 30, fontWeight: "bold" }}>All Products</Text> */}
    </TouchableWithoutFeedback>
    
  

    </View>
    </Card.Content>
      </Card>
    </SafeAreaView>
    </Background>
  )
}

export default HomeScreen
