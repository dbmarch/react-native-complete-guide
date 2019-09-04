import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View , ScrollView } from 'react-native';
import {isEmpty, map} from 'lodash'

export default function App() {
  const [item, setItem]= useState('')
  const [list, setList] = useState([])
  const itemInputHandler = (enteredText) => setItem(enteredText)
  const addItemHandler = ()=> {
    if (!isEmpty(item) ){
      setList([...list, item])
      setItem('')
    }
  }

  return (
    <View style = {styles.screen}>
      <View style = {styles.inputContainer}>
        <TextInput 
          placeholder = "Shopping List" 
          onChangeText = {itemInputHandler}
          style = {styles.textInput}
          value = {item}
          />
        <Button title = "ADD" onPress={addItemHandler}/>
       </View>
       <ScrollView>
        {map(list, (item, index)=>(
        <View  style={styles.listItem} key={index}  >
          <Text >{item}</Text>
         </View>))}
        
       </ScrollView>
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
    width: '80%'},
  listItem: {
    padding:10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 4,
  }
})