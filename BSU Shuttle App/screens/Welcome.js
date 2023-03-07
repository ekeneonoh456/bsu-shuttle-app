import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import OffCampus from "./OffCampus"
import Hours from "./Hours"
import DriverLogin from "./DriverLogin"
import Driver from "./Driver"
import { useState } from 'react';
import App from '../App';

export default function Welcome() {
  const [currentScreen, setCurrentScreen] = useState("");
  let screen = "";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BSU Shuttle App</Text>
      <StatusBar style="auto" />
      <View>
      <Image
        source={require("../assets/applogo.png")}
        style= {styles.logo}
        />
      <Image
        source={require("../assets/bulldog.gif")}
        style= {styles.logo}
        />
      </View>
      {screen}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 150,
    paddingTop: 50,
    paddingBottom: 50,
  },
  title:{
    paddingTop:20,
    color: '#F2C60F',
    textShadowColor: 'black',
    textShadowOffset: {width: -1.5, height: 1.5},
    textShadowRadius: 12,
    fontSize: 30,
  },
});
