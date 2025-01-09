import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Add = () => {
    return (
        <View>
            <Text>Add</Text>
        </View>
    )
}

export default Add
const mystyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    headline: {
        fontSize: 30
    },
    newlink: { color: "blue", marginTop: 20, fontSize: 20 }
})