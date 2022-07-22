import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '././Assets/Screens/Colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './Assets/Screens/SplashScreen';
import IntroScreen from './Assets/Screens/IntroScreen';
import HomeScreen from './Assets/Screens/HomeScreen';
import FormScreen from './Assets/Screens/FormScreen';
import SymptomScreen from './Assets/Screens/SymptomScreen';
// import testScreen from './Assets/Screens/testScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
          headerShown: false
          }}>
          
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
          <Stack.Screen name='IntroScreen' component={IntroScreen} />
          <Stack.Screen name='HomeScreen' component={bottomTabNavigation} />
          <Stack.Screen name='SymptomScreen' component={SymptomScreen} />
          <Stack.Screen name='FormScreen' component={FormScreen}/>
          
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

function bottomTabNavigation() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard:true,
          tabBarStyle: {
            height: 61,
          }
          
        }}>
        <Tab.Screen name="FormScreen" component={FormScreen}
          options={{
            tabBarLabel: 'Form',
            tabBarActiveTintColor: Colors.theme,
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused }) => {
              return <MaterialCommunityIcons name='form-select' color={focused ? Colors.iconActiveColor : 'gray'} size={26}
              style={{
                backgroundColor: focused ? Colors.theme : 'transparent',
                borderRadius: 50,
                padding: 10,
                bottom: -2,
                alignItems: 'center',
                }}
              />
            },
          }} />
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: Colors.theme,
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused }) => {
              return <Ionicons name='home' color={focused ? Colors.iconActiveColor : 'gray'} size={26}
                style={{
                  backgroundColor: focused ? Colors.theme : 'transparent',
                  borderRadius: 100,
                  padding: 10,
                  bottom: -2,
                  alignItems: 'center',
                }}
              />
            },
          }} />
        <Tab.Screen name="SymptomScreen" component={SymptomScreen}
          options={{
            tabBarLabel: 'Symptoms',
            tabBarActiveTintColor: Colors.theme,
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused }) => {
              return <Ionicons name='person-circle' color={focused ? Colors.iconActiveColor : 'gray'} size={26}
              style={{
                backgroundColor: focused ? Colors.theme : 'transparent',
                borderRadius: 100,
                padding: 10,
                 bottom: -2,
                alignItems: 'center',
                }}
              />
            },
          }} />
        
      </Tab.Navigator>
    );
  }