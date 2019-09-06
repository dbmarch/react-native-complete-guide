import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import {isEmpty} from 'lodash'
import Item from './components/Item'
import ItemInput from './components/ItemInput'

// the key extractor below is only required if your data doesn't have the correct shape.
export default function App() {
  const [list, setList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addItemHandler = (item)=> {
    const key = Math.random().toString()
    if (!isEmpty(item) ){
      setList([...list, {key, value: item}])
    }
    setIsAddMode(false);
  }

  const removeItemHandler= key => {
    const newList = list.filter(item=> item.key != key )
    setList(newList)
  }

  const cancelHandler = () => setIsAddMode(false)

  return (
    <View style = {styles.screen}>
      <Button title="Add Item" onPress={()=>setIsAddMode(true)}/>
      <ItemInput placeholder="Shopping List" addItemHandler={addItemHandler} visible={isAddMode} onCancel={cancelHandler}></ItemInput>
       <FlatList 
          data = {list} 
          renderItem= {itemData=>(
            <Item item = {itemData.item} onDelete={removeItemHandler} />
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
})