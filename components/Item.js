import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native'

const Item = ({item, onDelete}) =>{
   return  (
   <TouchableNativeFeedback onPress={()=>onDelete(item.key)}>
     <View style={styles.listItem}>
        <Text>{item.value}</Text>
      </View>
    </TouchableNativeFeedback>
   )
}

const styles = StyleSheet.create({
   listItem: {
     padding:10,
     backgroundColor: '#ccc',
     borderColor: 'black',
     borderWidth: 1,
     marginVertical: 4,
   }
 })

export default Item;