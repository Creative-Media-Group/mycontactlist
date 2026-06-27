import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { NativeTabs } from 'expo-router/build/native-tabs'
const TabsLayout = () => {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="home" options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='home' color={color} size={size}></Ionicons>
                ),
            }}></NativeTabs.Trigger>
            <NativeTabs.Trigger name='add' options={{
                tabBarLabel: "Add",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='add' color={color} size={size}></Ionicons>
                ), headerTitle: "Add"
            }}></NativeTabs.Trigger>
            <NativeTabs.Trigger name='profile' options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='person' color={color} size={size}></Ionicons>
                ), headerTitle: "Profile"
            }}></NativeTabs.Trigger>
        </NativeTabs>
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