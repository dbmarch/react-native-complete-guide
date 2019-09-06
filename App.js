import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View , ScrollView , FlatList} from 'react-native';
import {isEmpty, map} from 'lodash'

// the key extractor below is only required if your data doesn't have the correct shape.
export default function App() {
  const [item, setItem]= useState('')
  const [list, setList] = useState([])
  const itemInputHandler = (enteredText) => setItem(enteredText)
  const addItemHandler = ()=> {
    if (!isEmpty(item) ){
      setList([...list, {key: Math.random.toString(), value: item}])
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
       <FlatList 
          keyExtractor = {(item, index)=>item.key}  
          data = {list} 
          renderItem= {itemData=>(
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
          )}
        />
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