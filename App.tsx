/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* App.js */
import './gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/Screens/Home';
import {Text, TouchableOpacity, View} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';

// import type {PropsWithChildren} from 'react';

// import {TouchableOpacity} from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

function App() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 2000); // 3초 후에 스플래시 스크린 숨기기

  //   return () => clearTimeout(timer); // 클린업
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerLeft: left,
            headerTitle: center,
            headerRight: right,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function left(): any {
  return (
    <TouchableOpacity>
      <Text>Left</Text>
    </TouchableOpacity>
  );
}

function center() {
  return <View />;
}

function right(): any {
  return (
    <View>
      <Text>Right</Text>
    </View>
  );
}
