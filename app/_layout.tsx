import React from 'react'
import { Stack, ThemeProvider, useTheme, DefaultTheme } from 'expo-router'
import { StyleSheet } from "react-native"
import { ThemeContext } from 'expo-router/build/react-navigation';
const RootLayout = () => {
    const theme = useTheme();
    return (
        <ThemeProvider value={DefaultTheme ? ""}>
            <Stack>
                <Stack.Screen name='index' options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }}></Stack.Screen>
            </Stack>
        </ThemeProvider>
    )
}

export default RootLayout
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