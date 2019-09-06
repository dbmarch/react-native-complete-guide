import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'
import { AuthSession } from 'expo';

const ItemInput = ( {placeholder,  addItemHandler, visible }) => {
   const [item, setItem]= useState('')

   const itemInputHandler = (enteredText) => setItem(enteredText)

   return (
    <Modal visible = {visible} animationType = "slide">
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
    </Modal>
   )
}


const styles = StyleSheet.create({
   modal: {
      margin: 'auto'
   },
   inputContainer: {
      flex: 1,
      flexDirection: 'column', 
      justifyContent: 'center',
       alignItems: 'center' 
      },
    textInput: {
     marginBottom: 10,
     borderBottomColor: 'black', 
     borderBottomWidth: 1, 
     padding: 10, 
     width: '80%'},
   })


export default ItemInput;