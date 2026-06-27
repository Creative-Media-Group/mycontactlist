import { StyleSheet, View, FlatList } from 'react-native'
import { useCallback, useState } from 'react'
import { Link, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Host, Text } from "@expo/ui"
const Home = () => {
    const insets = useSafeAreaInsets();
    const [contacts, setContacts] = useState([]);
    useFocusEffect(useCallback(() => {
        AsyncStorage.getItem('contacts')
            .then((existingContactString) => {
                if (existingContactString) {
                    setContacts(JSON.parse(existingContactString))
                }
            });
    }, []));
    const renderItem = ({ item }) => (
        <Host style={mystyles.contactItem}>
            <Text textStyle={mystyles.contactName}>{item.name}</Text>
            <Link style={mystyles.contactRest} href={`tel:${item.phone}`}>{item.phone}</Link>
            <Link style={mystyles.contactRest} href={`mailto:${item.email}`}>{item.email}</Link>
        </Host>
    );
    return (
        <Host style={{ flex: 1, paddingTop: insets.top }}>
            <Text textStyle={mystyles.title}>Home</Text>
            <FlatList style={{ flex: 1 }} data={contacts} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}></FlatList>
        </Host>
    )
}

export default Home
const mystyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    headline: {
        fontSize: 30
    },
    newlink: { color: "blue", marginTop: 20, fontSize: 20 },
    title: { fontSize: 24, fontWeight: 'bold', },
    contactItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ccc" },
    contactName: { fontSize: 18, fontWeight: "bold" },
    contactRest: { fontSize: 18 }
})