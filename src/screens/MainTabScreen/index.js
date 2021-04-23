import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, DetailsScreen, ExploreScreen, ProfileScreen } from '../../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailStackScreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarColor: '#1f65ff',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-details" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="compass" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default MainTabScreen;


const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen}
                options={{
                    title: "Home Screen",
                    headerLeft: () => (
                        <Icon.Button name="menu-outline" size={25}
                            backgroundColor="#009387" onPress={() => navigation.openDrawer()} ></Icon.Button>
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

const DetailStackScreen = ({ navigation }) => {
    return (
        <DetailStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DetailStack.Screen name="Details" component={DetailsScreen}
                options={{
                    title: "Detail Screen",
                    headerLeft: () => (
                        <Icon.Button name="menu-outline" size={25}
                            backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()} ></Icon.Button>
                    )
                }}
            />
        </DetailStack.Navigator>
    )
}