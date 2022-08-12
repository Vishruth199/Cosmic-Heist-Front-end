import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Button from '../../features/Button';
import React, { useEffect, useState } from 'react'
import { getToken } from '../../services/AsyncStorageService'
import { useGetLoggedUserQuery } from '../../services/userAuthApi'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../features/userSlice'
import { setUserToken } from '../../features/authSlice'
// import Quiz1 from './auth/Quiz1'
const DashboardScreen = () => {
  const [userLToken, setUserLToken] = useState()

  useEffect(() => {
    (async () => {
      const token = await getToken() // Getting Token from Storage
      setUserLToken(token)          // Store Token in Local State
      dispatch(setUserToken({ token: token })) // Store Token in Redux Store
    })();
  })

  const { data, isSuccess } = useGetLoggedUserQuery(userLToken)

  // Store User Data in Redux Store
  const dispatch = useDispatch()
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserInfo({ email: data.user.email, name: data.user.name }))
    }
  })
  const handleLogout = async () => {
    navigation.navigate('Quiz1');
  }
  const upload1 = async () => {
    navigation.navigate('upload');
    }
    const qr = async () => {
    navigation.navigate('qrcodee');
    }
  const navigation = useNavigation()
  return (
     <View style={{ marginTop: 240 }}>
    <View>
 <Button mode="contained" onPress={handleLogout} color='#F8772E'>
        Quiz
      </Button>

   <Button mode="contained" onPress={upload1} color='#F8772E'>
        Upload Image
      </Button>

      <Button mode="contained" onPress={qr} color='#F8772E'>
        QR Scan
      </Button>
    </View>
   </View>
  );
}
export default DashboardScreen


