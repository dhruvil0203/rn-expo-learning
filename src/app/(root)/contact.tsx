import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const contact = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'white' }}>Contact</Text>
            <Link href={"/" as any} style={{ fontSize: 20, color: 'white' }}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </Link>
            <Link href={"/about" as any} style={{ fontSize: 20, color: 'white' }}>
                About
            </Link>
        </View>
    )
}

export default contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
})