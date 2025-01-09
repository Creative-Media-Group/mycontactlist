import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Link, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Home = () => {
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
        <View style={mystyles.contactItem}>
            <Text style={mystyles.contactName}>{item.name}</Text>
            <Link style={mystyles.contactRest} href={`tel:${item.phone}`}>{item.phone}</Link>
            <Link style={mystyles.contactRest} href={`mailto:${item.email}`}>{item.email}</Link>
        </View>
    );
    return (
        <View>
            <Text style={mystyles.title}>Home</Text>
            <FlatList data={contacts} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}></FlatList>
        </View>
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