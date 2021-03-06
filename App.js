import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home  from './components/Home';
import Profile  from './components/Profile';
import Details  from './components/Details';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Liked  from './components/Liked';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './assets/colors/colors'
import 'react-native-gesture-handler';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator =()=>{
  return (<Tab.Navigator
  tabBarOptions={{
    style:styles.tabBar,
    activeTintColor: colors.orange,
    inactiveTintColor: colors.gray,
    showLabel:false

  }}
  > 
    <Tab.Screen
     name='Home'
     component={Home} 
     options={{
      tabBarIcon:({color})=><Entypo name='home' size={32} color={color}/>
    }} />
    <Tab.Screen name='Liked' component={Liked} options={{
      tabBarIcon:({color})=><Entypo name='heart' size={32} color={color}/>
    }}/>
    <Tab.Screen name='Profile' component={Profile}  options={{
      tabBarIcon:({color})=><MaterialCommunityIcons name='account' size={32} color={color}/>
    }}/>
     </Tab.Navigator>)
    
  
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name='Details' component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});



//style={styles.container}