import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


const index = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'white' }}>Overview</Text>
            <Link href={"/" as any} style={{ fontSize: 20, color: 'white' }}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </Link>
            <Link href={"contact" as any} style={{ fontSize: 20, color: 'white' }}>
                Contact
            </Link>
            <Link href={"about" as any} style={{ fontSize: 20, color: 'white' }}>
                About
            </Link>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
})