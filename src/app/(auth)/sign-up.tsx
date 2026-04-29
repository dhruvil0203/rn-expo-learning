import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const signUp = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'white' }}>sign-up</Text>
            <Link href={"/sign-in" as any} style={{ fontSize: 20, color: 'white' }}>
                SignIn
            </Link>
            <Link href={"/" as any} style={{ fontSize: 20, color: 'white' }}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </Link>
        </View>
    )
}

export default signUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: "white"
    }
})