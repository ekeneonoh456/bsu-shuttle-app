import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import Welcome from "./screens/Welcome"
import OffCampus from "./screens/OffCampus"
import DriverLogin from "./screens/DriverLogin"
import Hours from './screens/Hours';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  /*
  const [currentScreen, setCurrentScreen] = useState("Welcome");
  let screen = "";
  if (currentScreen === "OffCampus") {
    screen = <OffCampus/>;
   } else if (currentScreen === "Schedules") {
    screen = <Schedules/>;
   } else if (currentScreen === "DriverLogin"){
    screen = <DriverLogin/>;
   } else if (currentScreen === "Welcome"){
    screen = <Welcome/>;
   }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.menu}>
        {screen}
      </View>
      

    </View>

  );
  */

const Tab = createMaterialBottomTabNavigator();

  let flag = false;  
  return (
		<NavigationContainer >
			<Tab.Navigator
        activeColor="black"
        inactiveColor='black'
        barStyle={{ backgroundColor: '#fece09' }}>
				<Tab.Screen
					name="Home"
					component={Welcome}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="home" color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Off-Campus"
					component={OffCampus}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="bus" color={color} size={size} />
						), 
					}}
				/>
        <Tab.Screen
					name="Hours"
					component={Hours}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="time" color={color} size={size} />
						),
					}}
				/>
        <Tab.Screen
					name="Driver"
					component={DriverLogin}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="person" color={color} size={size} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
