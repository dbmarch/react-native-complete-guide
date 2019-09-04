import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.screen}>
      <View style = {styles.inputContainer}>
        <TextInput placeholder = "Shopping List" 
          style = {styles.textInput}/>
        <Button title = "ADD" />
       </View>
      <View><Text>ShoppingList</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
     alignItems: 'center' 
    },
  textInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10, 
    width: '80%'}
})