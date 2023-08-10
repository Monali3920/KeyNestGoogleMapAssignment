/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './google_map_integration/screens/HomeScreen';
import DetailsScreen from './google_map_integration/screens/StoreScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (

    <NavigationContainer>
    <Tab.Navigator
     screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Key') {
           iconName = "vpn-key";
         } else if (route.name === 'Store') {
           iconName ="home-filled";
         }
         return (
           <MaterialIcons
             name={iconName}
             size={size}
             color={color}
           />
         );
       }
     })}>
        <Tab.Screen name="Key" component={HomeScreen} />
        <Tab.Screen name="Store" component={DetailsScreen} />
    </Tab.Navigator>
</NavigationContainer> 
  );
}

export default App;
