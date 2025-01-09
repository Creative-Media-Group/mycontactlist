import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Add = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = async () => {
        if (name && phone && email) {
            const contact = { name, phone, email };
            const existingContactString = await AsyncStorage.getItem('contacts');
            let contacts=[];
            if(existingContactString) {
                contacts=JSON.parse(existingContactString);
            }
            contacts.push(contact);
            await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
            Alert.alert("Contact saved", `Name: ${name}\nPhonenumber: ${phone}\nE-Mail: ${email}`)
            setName('');
            setPhone('');
            setEmail('');

        } else {
            Alert.alert("Failure", "Please fill all fields.")
        }
    };
    return (
        <View style={mystyles.container}>
            <Text style={mystyles.title}>Add contact</Text>
            <Text>Name</Text>
            <TextInput placeholder='Name' style={mystyles.input} value={name} onChangeText={setName}></TextInput>
            <Text>Phonenumber</Text>
            <TextInput placeholder='Phonenumber' style={mystyles.input} value={phone} onChangeText={setPhone}></TextInput>
            <Text>E-Mailaddress</Text>
            <TextInput placeholder='E-Mailaddress' style={mystyles.input} value={email} onChangeText={setEmail}></TextInput>
            <Button title='Add contact' onPress={handleSubmit}></Button>
        </View>
    )
}

export default Add
const mystyles = StyleSheet.create({
    container: {
        padding: 20
    },
    headline: {
        fontSize: 30
    },
    newlink: { color: "blue", marginTop: 20, fontSize: 20 },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
    input: { borderWidth: 1, marginBlock: 10, paddingLeft: 10 }
})