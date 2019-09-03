import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style = {{padding: 30}}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput placeholder = "Shopping List" 
          style = {{borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, width: '80%'}}/>
        <Button title = "ADD" />
       </View>
      <View><Text>ShoppingList</Text></View>
    </View>
  );
}

