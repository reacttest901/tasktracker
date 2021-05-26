import React, { Component ,useState } from 'react'
import { Text, View } from 'react-native'


const Tasks =(props) =>{
        return (
            <View>
                <Text>{props.text}</Text>
                <Text>{props.date}</Text>

            </View>
        )
    }

export default Tasks;