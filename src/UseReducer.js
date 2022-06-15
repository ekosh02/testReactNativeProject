import React, { useEffect, useReducer, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

const initialState = 0

const reducer = (state, action) => {
    console.log('a - ',action, 's - ', state)
    switch (action) {
        case 'inc': return state + 1
        case 'dic': return state - 1
        case 'five': return state = 5
        case 'res': return initialState
    }
}

export const UseReducer = () => {

    const [data, setData] = useReducer(reducer, initialState)

    console.log('state - ', data)
 
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setData('inc')}><Text>incriment</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setData('dic')}><Text>dicriment</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setData('five')}><Text>inc+5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setData('res')}><Text>reset</Text></TouchableOpacity>
            <Text>{data}</Text>
        </View>
    )
}