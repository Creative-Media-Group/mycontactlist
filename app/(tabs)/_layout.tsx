import { StyleSheet } from 'react-native'
import { NativeTabs } from 'expo-router/build/native-tabs'
const TabsLayout = () => {
    return (
        <NativeTabs
            blurEffect='systemDefault'>
            <NativeTabs.Trigger name="home">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={{ default: "house", selected: "house.fill" }} md={{ default: "home", selected: "home_filled" }} />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name='add'>
                <NativeTabs.Trigger.Label>Add</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={"plus"} md={"add"} />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name='profile' >
                <NativeTabs.Trigger.Icon sf={"person"} md={"person"} />
                <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
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