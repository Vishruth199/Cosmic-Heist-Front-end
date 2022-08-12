import { View, Text,NativeModules } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import Background from '../../features/Background';
const { UIManager } = NativeModules;
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { removeToken } from '../../services/AsyncStorageService';
import { useSelector } from 'react-redux';
import { unSetUserInfo } from '../../features/userSlice';
import { unsetUserToken } from '../../features/authSlice';
import 'react-native-reanimated';
const SideBar = ({ ...props }) => {

  const handleLogout = async () => {
    unSetUserInfo({ email: "", name: "" })
    unsetUserToken({ token: null })
    await removeToken('token')
    navigation.navigate('UserLogin');
  }

  const navigation = useNavigation()
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  // const myToken = useSelector(state => state.auth)
  // console.log(myToken)
  return (
   
<DrawerContentScrollView {...props}>
<View style={{ backgroundColor: '#fcbf49'}}>

      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>{myData.name}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>{myData.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
     </View>
    </DrawerContentScrollView>
  );
};
export default SideBar