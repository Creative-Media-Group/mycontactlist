import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='home' color={color} size={size}></Ionicons>
                ),
            }}></Tabs.Screen>
            <Tabs.Screen name='add' options={{
                tabBarLabel: "Add",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='add' color={color} size={size}></Ionicons>
                ), headerTitle: "Add"
            }}></Tabs.Screen>
            <Tabs.Screen name='profile' options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='person' color={color} size={size}></Ionicons>
                ), headerTitle: "Profile"
            }}></Tabs.Screen>
        </Tabs>
    )
}

export default TabsLayout
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