import React, { useState } from 'react';
import { StyleSheet,View , FlatList} from 'react-native';
import {isEmpty} from 'lodash'
import Item from './components/Item'
import ItemInput from './components/ItemInput'

// the key extractor below is only required if your data doesn't have the correct shape.
export default function App() {
  const [list, setList] = useState([])

  const addItemHandler = (item)=> {
    const key = Math.random().toString()
    if (!isEmpty(item) ){
      setList([...list, {key, value: item}])
    }
  }

  const removeItemHandler= key => {
    const newList = list.filter(item=> item.key != key )
    setList(newList)
  }

  return (
    <View style = {styles.screen}>
      <ItemInput placeholder="Shopping List" addItemHandler={addItemHandler}  ></ItemInput>
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