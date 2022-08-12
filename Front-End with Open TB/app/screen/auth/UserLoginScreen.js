import { View, Text, TextInput, Button, TouchableWithoutFeedback } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles, toastConfig } from "../../../style"
import Toast from "react-native-toast-message"
 import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from "@react-navigation/native"
import { useLoginUserMutation } from "../../../services/userAuthApi"
import { storeToken } from "../../../services/AsyncStorageService"

import Background from "../../../features/Background"
// import Logo from "../../../features/logo"
import BackButton from "../../../features/BackButton"
// import { Card } from "react-native-paper"

const UserLoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const clearTextInput = () => {
    setEmail("")
    setPassword("")
  }

  const [loginUser] = useLoginUserMutation()

  const handleFormSubmit = async () => {
    if (email && password) {
      const formData = { email, password }
      const res = await loginUser(formData)
      if (res.data.status === "success") {
        await storeToken(res.data.token) // Store Token in Storage
        clearTextInput()
        navigation.navigate("Instructions")
      }
      if (res.data.status === "failed") {
        Toast.show({
          type: "warning",
          position: "top",
          topOffset: 0,
          text1: res.data.message,
        })
      }
    } else {
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All fields are Required",
      })
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}

      <SafeAreaView>
        {/* <Card> */}
          {/* <Card.Content> */}

         
            {/* <ScrollView keyboardShouldPersistTaps="handled"> */}

              <View style={{ marginTop: 200 }}>
                 <Toast config={toastConfig} />
                <View style={[styles.inputWithLabel, { marginBottom: 10 }]}>
                  <Text style={styles.labelText}>Email</Text>
                  <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Write Your UserName" keyboardType="email-address" />
                </View>
                <View style={styles.inputWithLabel}>
                  <Text style={styles.labelText}>Password</Text>
                  <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Write Your Password" secureTextEntry={true} />
                  
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        navigation.navigate("SendPasswordResetEmail")
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
                    </TouchableWithoutFeedback>
                  </View>
                <View style={{ width: 250, alignSelf: "center", marginBottom: 25 }}>
                  <Button
                    title="Login"
                    onPress={
                      handleFormSubmit
                    }
                    color="#F8772E"
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, marginBottom: 150 }}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        navigation.navigate("Registration")
                      }}
                    >
                      <Text style={{ fontWeight: "bold", alignSelf: "center" }}>Don't have an account? signup</Text>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>
            {/* </ScrollView> */}

          {/* </Card.Content>
        </Card> */}
      </SafeAreaView>
    </Background>
  )
}

export default UserLoginScreen
