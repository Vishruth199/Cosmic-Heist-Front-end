import React from 'react'
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native'
import Background from './Background'

const Login = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Segoe UI',
          fontSize: 40,
          padding: 10,
          backgroundColor: '#fff',
          margin: 30,
          // marginLeft: 77,
          // marginRight: 77,
          // boxShadow: '5px 5px 3px #febe09',
          // borderRadius: '10px',
          textAlign: 'center',
        }}
        selectable
      >
        <Image style={styles.logo} source={require('../assets/key.png')} />
        Login
      </Text>
    </View>
  )
}

const Register = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Segoe UI',
          fontSize: 40,
          padding: 10,
          backgroundColor: '#fff',
          margin: 30,
          // marginLeft: 77,
          // marginRight: 77,
          // boxShadow: '5px 5px 3px #febe09',
          // borderRadius: '10px',
          textAlign: 'center',
        }}
        selectable
      >
        <Image style={styles.logo1} source={require('../assets/link.png')} />
        Register
      </Text>
    </View>
  )
}

export default function StartScreen({ navigation }) {
  return (
    <Background>
    <View style={styles.container}>
      
        <TouchableOpacity
          mode="outlined"
          onPress={() => navigation.navigate('UserLogin')}
        >
          <Login />
        </TouchableOpacity>
        <TouchableOpacity
          mode="outlined"
          onPress={() => navigation.navigate('Registration')}
        >
          <Register />
        </TouchableOpacity>
      
    </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  // logo: {
  //   height: '83px',
  //   width: '74',
  //   marginLeft: '41px',
  //   justifyContent: 'center',
  // },
  // logo1: {
  //   height: '73px',
  //   width: '74',
  //   marginLeft: '41px',
  //   justifyContent: 'center',
  // },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
})
