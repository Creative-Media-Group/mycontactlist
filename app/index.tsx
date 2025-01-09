import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
    return (
        <View style={mystyles.container}>
            <Text style={mystyles.headline}>Hello World</Text>
            <Link href="/(tabs)/home" style={mystyles.newlink}>Open Profile</Link>
        </View>
    )
}

export default Index

const mystyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headline: {
        fontSize: 30
    },
    newlink: { color: "blue", marginTop: 20, fontSize: 20 }
})