import React from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';
import {MultipleSelectList}from 'react-native-dropdown-select-list'

const Hour = () => {
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
    <View style={{flex: 4, paddingHorizontal:15,marginTop:15}}>
      <View>
        <Text> Hours of Operations </Text>
      </View>
      <MultipleSelectList 
        setSelected={(val) => setCategories(val)} 
        data={data} 
        save="key"
        label="Selected Options"
        boxStyles={{marginTop:25}}
    />
    <ScrollView>
      <View style={{flex:1,marginTop:50}}>
        {
          categories.map((item) => {
            return(
              <Text key={item} style={{flex:1, marginTop:10,color:'black', fontSize:20}}>{item}</Text>
            )
          })
        }
        
      </View>
      </ScrollView>
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
    color:'black',
  },
});
