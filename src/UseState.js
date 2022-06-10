import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export const UseState = (props) => {

  const initialState = 0
  const [data, setData] = useState(initialState)

console.log('render - ', data)

  return (
    <View style={{ alignItems: 'center' }}>

      <Text>{data}</Text>

      <TouchableOpacity onPress={() => setData(data + 1)}>
        <Text>data++</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setData(data - 1)}>
        <Text>data--</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setData(5)}>
        <Text>data==5</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setData(initialState)}>
        <Text>reset</Text>
      </TouchableOpacity>

    </View>
  );
};
