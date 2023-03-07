import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button, TextInput} from 'react-native';
import { useState } from 'react';
import Driver from "./Driver"
import Welcome  from "./Welcome"

export default function DriverLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameCheck, setUsernameCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  
  let screen = 
  <><Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>Login with your given username and password.</Text>
  <TextInput
    placeholder="Username"
    value={username}
    style={styles.textInput}
    onChangeText={(text) => {
      setUsername(text);
    }}
  />
  <TextInput
    placeholder="Password"
    value={password}
    style={styles.textInput}
    onChangeText={(text) => {
      setPassword(text);
    }}
  />
  <Button title="Submit" onPress={() => {
    checkCred();
    console.log(screen);
    } }/>
  <StatusBar style="auto" /></>;

  console.log(username);
  console.log(password);
  function checkCred(){
    if(username==="guest" && password==="123")
    {
      setUsernameCheck("guest");
      setPasswordCheck("123");
      console.log(usernameCheck);
      console.log(passwordCheck);

    }
  }
  if (usernameCheck === "guest" && passwordCheck === "123")
    {
          screen = <Driver/>;
          console.log(screen);
      }
    else{
      console.log("Error with if statement");
    }

  
  return (
    <View style={styles.container}>
      {screen}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
		width: "80%",
		backgroundColor: "white",
		padding: 10,
		textAlign: "center",
    fontWeight: 'bold',
    fontSize: 25
	},
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
