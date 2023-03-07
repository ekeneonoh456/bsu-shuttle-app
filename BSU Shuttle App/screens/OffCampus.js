
// React Native Get Current Date Time
// https://aboutreact.com/react-native-get-current-date-time/

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollViewStyleSheet, StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import { useState, useEffect } from 'react';
import { ReactComponent as CalenderIcon } from '../assets/calendar.svg';
import {ReactComponent as ClockIcon} from '../assets/clock.svg';
import App from "../App"
//import { useIsFocused } from '@react-navigation/native';

/*
function Profile() {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();

  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;
}
*/

const OffCampus = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  let d = 0;
  let h = 0;
  let m = 0;
  
  useEffect(() => {
    var day = new Date().getDay(); //current Day of the Week
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
   // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      month + '/' + date + '/' + year 
      + ' ' + hours + ':' + min
    );

    const fridayData = {
      hour: [16, 17, 19, 21,
        16, 18, 20, 21,
        16, 18, 20,
        16, 19, 20,
        17, 19, 21,
      ],
      minutes: [5, 45, 50, 35,
        15, 10, 15, 45,
        40, 45, 40,
        55, 0, 55,
        10, 15, 10,
        ],
      location: ['ELLC/ Parking Lot S','ELLC/ Parking Lot S','ELLC/ Parking Lot S','ELLC/ Parking Lot S',
      'Student Center/ Lot O','Student Center/ Lot O','Student Center/ Lot O','Student Center/ Lot O',
      'Bowie Town Center/ Safeway', 'Bowie Town Center/ Safeway', 'Bowie Town Center/ Safeway',
      'Walmart', 'Walmart', 'Walmart',
      'Target', 'Target', 'Target',
    ],
    };
  
    const saturdayData = {
      hour: [14, 15, 17, 19, 21,
        14, 16, 18, 20, 21,
        14, 16, 18, 20,
        14, 16, 18, 20,
        15, 17, 19, 21,
      ],
      minutes: [5, 35, 40, 45, 30,
        15, 0, 5, 10, 40,
        40, 35, 40, 35,
        55, 55, 55, 50,
        10, 5, 10, 5
      ],
      location: ['ELLC/ Parking Lot S','ELLC/ Parking Lot S','ELLC/ Parking Lot S','ELLC/ Parking Lot S', 'ELLC/ Parking Lot S',
      'Student Center/ Lot O', 'Student Center/ Lot O', 'Student Center/ Lot O', 'Student Center/ Lot O', 'Student Center/ Lot O',
      'Bowie Town Center/ Safeway', 'Bowie Town Center/ Safeway', 'Bowie Town Center/ Safeway', 'Bowie Town Center/ Safeway',
      'Walmart', 'Walmart', 'Walmart', 'Walmart',
      'Target', 'Target', 'Target', 'Target',
      ],
    };
  
    const sundayData = {
      hour: [14, 15, 18, 19,
        14, 16, 18, 19,
        14, 16, 18,
        14, 17, 19,
        15, 17, 19,
      ],
      minutes: [5, 35, 50, 45,
        15, 0, 15, 55,
        40, 45, 50,
        55, 0, 5,
        10, 15, 20,
      ],
      location: ['ELLC/ Parking Lot S', 'ELLC/ Parking Lot S', 'ELLC/ Parking Lot S', 'ELLC/ Parking Lot S',
      'Student Center/ Lot O', 'Student Center/ Lot O', 'Student Center/ Lot O', 'Student Center/ Lot O',
      'Bowie Town Center/ Safeway', 'Bowie Town Center/ Safeway', 'Bowie Town Center/ Safeway',
      'Walmart', 'Walmart', 'Walmart',
      'Target', 'Target', 'Target',
      ],
    };
  
  //let schedule = "";

    if (day == 5){
      console.log("Friday test")
      for (let i = 0; i < fridayData.hour.length ; i++){
        if ((fridayData.hour[i]) >= hours){
          //schedule = <Text>hello</Text>;
          //schedule = <Text> Friday location is {fridayData.location[i]} </Text>;
          console.log(fridayData.location[i])
          
          if((fridayData.minutes[i] >= 0) && (fridayData.minutes[i] <=9)){
            console.log((fridayData.hour[i] - 12) + ":0" + fridayData.minutes[i])
          }else{
            console.log((fridayData.hour[i] - 12) + ":" + fridayData.minutes[i])
          }
        }else {
          console.log("no more shuttle times today")
        }
      }
    }
  
    if (day == 6){
      console.log("Saturday test")
      for (let i = 0; i < saturdayData.hour.length; i++){
        if ((saturdayData.hour[i]) >= hours){
          console.log(saturdayData.location[i]);
          
          if((saturdayData.minutes[i] >= 0) && (saturdayData.minutes[i] <=9)){
            console.log((saturdayData.hour[i] - 12) + ":0" + saturdayData.minutes[i])
          }else{
            console.log((saturdayData.hour[i] - 12) + ":" + saturdayData.minutes[i])
          }
        }else {
          console.log("no more shuttle times today")
        }
      }
    }
  
    if (day == 7){
      console.log("Sunday test")
      for (let i = 0; i < sundayData.hour.length; i++){
        if ((sundayData.hour[i]) >= hours){
          console.log(sundayData.location[i])
          
          if((sundayData.minutes[i] >= 0) && (sundayData.minutes[i] <=9)){
            console.log((sundayData.hour[i] - 12) + ":0" + sundayData.minutes[i])
          }else{
            console.log((sundayData.hour[i] - 12) + ":" + sundayData.minutes[i])
          }
        }else {
          console.log("no more shuttle times today")
        }
      }
    }

  }, []);


  

  let availability = "";
  if (App.flag == true)
  {
    availability = <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>The off-campus shuttle service IS available today!</Text>;
    setTimeout(() => {App.flag=false;}, 43200000);
  }
  else
  {
    availability = <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>The off-campus shuttle service IS NOT available today.</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <View style={styles.container}>
        <View style={styles.container}>
          {availability}
          {/*{schedule} */}
          <Text>      </Text>
          <Text style={styles.textStyle}>
            Current Date and Time:
          </Text>
          <Text style={styles.textStyle}>
            {currentDate}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'black'
          }}>
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
        </Text>
        <View style = {{flex: 3, fontSize:12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:20}}>
          <View style={{flex:2}}>
            <Text style = {{fontWeight:'bold'}}>ELLC / Lot S</Text>
            <Text>4:05 PM</Text>
            <Text>5:45 PM</Text>
            <Text>7:50 PM</Text>
            <Text>9:35 PM</Text>
        
          </View>
          <View style={{flex:2}}>
            <Text style = {{fontWeight:'bold'}}>Student Center / Lot O</Text>
            <Text>4:15 PM</Text>
            <Text>6:10 PM</Text>
            <Text>8:15 PM</Text>
            <Text>9:45 PM</Text>
          </View>
        </View>
        <View style = {{flex: 3, fontSize:12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:20}}>
            <View style={{flex:2}}>
              <Text style = {{fontWeight:'bold'}}>Bowie Town Center / Safeway</Text>
              <Text>4:40 PM</Text>
              <Text>6:45 PM</Text>
              <Text>8:40 PM</Text>
            </View>
          </View>
        </View>
        <View style = {{flex: 1, fontSize:12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:20}}>
            <View style={{flex:2}}>
              <Text style = {{fontWeight:'bold'}}>Walmart</Text>
              <Text>4:55 PM</Text>
              <Text>7:00 PM</Text>
              <Text>8:55 PM</Text>
            </View>
            <View style={{flex:2}}>
              <Text style = {{fontWeight:'bold'}}>Target</Text>
              <Text>5:10 PM</Text>
              <Text>7:15 PM</Text>
              <Text>9:10 PM</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    textAlign: 'center',
    textStyle: 'bold',
    fontSize: 25,
    fontWeight: "bold",
    color: 'black',
  },
});

export default OffCampus;

/******
export default function OffCampus(){
const currentTime = new Date();
const displayTime = currentTime.getTime();
const currentHour = currentTime.getHours();
const currentMinutes = currentTime.getMinutes();

  if (currentHour >= 8 && currentHour < 12) {
    // show data for 8am to 12pm
  } else if (currentHour >= 12 && currentHour < 18) {
    
    // show data for 12pm to 6pm
  } else {
    // show data for other hours
  }

  return (
    <View style={styles.container}>
      <Text>Off Campus page</Text>
      <StatusBar style="auto" />
      </View>

      
  );

}
*******/

/*function OffCampus() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
         setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Off Campus page</Text>
      <StatusBar style="auto" />

      <div>
            <CalenderIcon />
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            <ClockIcon />
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
        </div>

    </View>
  );
} */

/****** 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    height: '100vh',
    backgroundColor: '#2d3436',
    color: '#f3f3f3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    text: 'center',
    font: '20',
  },
  
  svg: {
    margin: 5,
    font: 20,
    width: 35,
    height: 35,
  },
  
  p: {
    padding: 5,
    margin: 5,
  },
});

*****/