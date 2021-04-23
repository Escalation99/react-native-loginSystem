import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen, SignInScreen, SignUpScreen } from '../../screens'


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen