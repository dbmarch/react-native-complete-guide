import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const ItemInput = ( {placeholder,  addItemHandler }) => {
   const [item, setItem]= useState('')

   const itemInputHandler = (enteredText) => setItem(enteredText)

   return (
   <View style = {styles.inputContainer}>
   <TextInput 
     placeholder = {placeholder}
     onChangeText = { itemInputHandler}
     style = {styles.textInput}
     value = {item}
     />
   <Button title = "ADD" onPress={()=>{
      addItemHandler(item)
      setItem('')} } />
  </View>
   )
}


const styles = StyleSheet.create({
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
   })


export default ItemInput;