import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';
import Welcome from './Welcome';
import App from "../App"

export default function Driver () {
const [readyToGo, setreadyToGo] = useState("");
let readyCheckMark = "";
function readyToGoHandler(){
  console.log("function starts");
  setreadyToGo("true");
  App.flag = true;
}

console.log(readyToGo);

if (readyToGo === "true")
{
  readyCheckMark = <Image
  source={require("../assets/driverReadyCheck.png")}
  style={{width: 300, height:300}}/>;

}
else{
  console.log("Error with ready function");
}

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, fontWeight:"bold"}} >Driver</Text>
      <Pressable onPress={() => readyToGoHandler("")}> 
              <Image
								source={require("../assets/readyButton.png")}
								style={{width: 450, height:200}}
							/>
      </Pressable>
      {readyCheckMark}
      <StatusBar style="auto" />
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
});
