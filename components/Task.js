import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Task({task,date}){
    
        return (
            <View>
                <Text key={task.key} >{task.value}</Text>
                <Text key={date.key} >{date.value}</Text>
            </View>
        )
    }

