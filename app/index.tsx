import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { Host, Text } from '@expo/ui'

const Index = () => {
    return (
        <Host matchContents style={mystyles.container}>
            <Text textStyle={mystyles.headline}>Hello World</Text>
            <Link href="/(tabs)/home" style={mystyles.newlink}>Open Profile</Link>
        </Host>
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