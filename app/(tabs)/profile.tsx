import { StyleSheet, Text } from 'react-native'
import { Host } from '@expo/ui'
const Profile = () => {
    return (
        <Host>
            <Text>Profile</Text>
        </Host>
    )
}

export default Profile
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