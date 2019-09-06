import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'


const ItemInput = ( {placeholder,  addItemHandler, visible, onCancel }) => {
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
          <View style = {styles.buttonTray}>
            <View style = {styles.button}>
               <Button title = "CANCEL" 
                  color = 'red' 
                  onPress={onCancel}/>
           </View>
           <View style = {styles.button}>
               <Button title = "ADD" onPress={()=>{
                  addItemHandler(item)
                  setItem('')} } />
          </View>
          </View>
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
    buttonTray: {
      flexDirection: 'row', 
      justifyContent: 'space-evenly',
      width: '80%'
     },
     button: {
        width: '40%'
     }
   })


export default ItemInput;