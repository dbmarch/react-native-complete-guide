import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Item = ({item, onDelete}) =>{
   return  (
   <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
     <View style={styles.listItem}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
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