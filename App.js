import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SupportScreen, BookmarkScreen, SettingsScreen, MainTabScreen, RootStackScreen } from './src/screens'
import { DrawerContent } from './src/screens'
import { AuthContext } from './src/components/context'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Tab2 = createBottomTabNavigator();

const App = () => {

  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  }
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async (foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].usernamel

      try {
        await AsyncStorage.setItem('userToken', userToken)
      } catch (e) {
        console.log(e)
      }

      dispatch({ type: 'LOGIN', id: userName, token: userToken })
    },

    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      setUserToken('ray')
      setIsLoading(false)
    },
  }), [])

  useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          </Drawer.Navigator>
        ) :
          <RootStackScreen />

        }

      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
