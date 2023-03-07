import React from 'react';
import {View,Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {MultipleSelectList}from 'react-native-dropdown-select-list'

const Hours = () => {
  const [categories, setCategories] = React.useState([]);
  
  const data = [
    {key: 'Food Hours\n\nThe Pub:\nMonday - Thursday: 11 AM - 11 PM\nFriday: 11 AM - 8 PM\n\nC-Store:\nMonday - Sunday: 5 PM - 11:30 PM\n\nELLC Marketplace:\nMonday - Saturday: 11 AM - 9 PM\nSunday: 11 AM - 7 PM\n\nDining Hall:\nMonday - Friday:\nBreakfast: 8 AM - 11 AM\nLunch: 11AM - 4 PM\nDinner: 4 PM - 8:30 PM\nSaturday and Sunday:\nBrunch: 11 AM - 4 PM\nDinner: 4 PM - 7 PM\n\n',
    value:'Food'},
    {key:'Student Center Hours\n\nBuilding Hours:\nMonday - Friday: 8 AM - 11 PM\nSaturday: 10 AM - 11 PM\nSunday: 10 AM - 9 PM\n\nBookstore:\nMonday - Friday: 9 AM - 5 PM\nSaturday: 10 AM - 4 PM\n\nBulldog Card Office:\nMonday - Friday: 8:30 AM - 4:30 PM\nBulldog Bites\n(located in Business Building):\nMonday - Thursday: 8:30 AM - 7:30 PM\nFriday: 8:30 AM - 2:30 PM\n\nGolden Grub:\nMonday - Thursday: 8:30 AM - 7:30 PM\nFriday: 8:30 AM - 2:30 PM\n\n',
    value:'Student Center'},
    {key:'Resources\n\nLibrary Hours:\nMonday - Thursday: 8 AM - 10 PM\nFriday: 8 AM - 5 PM\nSaturday: 9 AM - 6 PM\nSunday: 1 PM - 10 PM\n\nCounseling Services:\nMonday - Friday: 8:30 AM - 5 PM\n\nWellness Center:\nMonday - Friday: 8:30 AM - 5 PM\n\nNutrition Lounge:\nMonday - Friday: 10 AM - 2 PM',
    value:'Resources'},
  ]


  return(
    <View style={{backgroundColor: 'black',flex: 4, paddingHorizontal:15,marginTop:20}}>
      <View>
        <Text style = {{paddingTop: 20, color: '#F2C60F', fontSize: 20, fontStyle: 'bold', textShadowColor: 'black', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10, fontWeight: 'bold'}}> Hours of Operations </Text>
      </View>
      <MultipleSelectList 
        setSelected={(val) => setCategories(val) }
        data={data}
        save="key"
        //label= "Selected Options"
        labelStyles={{color:"white"}}
        disabledCheckBoxStyles={{color:"white"}}
        badgeStyles={{color:"yellow"}}
        boxStyles={{marginTop:25, color: 'white', backgroundColor: 'white'}}
        dropdownTextStyles={{color: "white"}}
    />
    <ScrollView>
      <View style={{flex:1,marginTop:25}}>
        {
          categories.map((item) => {
            return(
              <Text key={item} style={{flex:1, marginTop:10,color:'white', fontSize:20}}>{item}</Text>
            )
          })
        }
        
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>    
  )

};

export default Hours;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50,
    color:'white',
  },
});
