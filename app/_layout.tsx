import { Stack, ThemeProvider, useTheme, DefaultTheme, DarkTheme } from 'expo-router'
import { StyleSheet, useColorScheme } from "react-native"
const RootLayout = () => {
    const colorSheme = useColorScheme();
    return (
        <ThemeProvider value={colorSheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name='index' options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }}></Stack.Screen>
            </Stack>
        </ThemeProvider>
    )
}

export default RootLayout
