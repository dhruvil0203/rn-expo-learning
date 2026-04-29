import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const signIn = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'white' }}>sign-in</Text>
            <Link href={"/" as any} style={{ fontSize: 20, color: 'white' }}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </Link>
            <Link href={"/sign-up" as any} style={{ fontSize: 20, color: 'white' }}>
                SignUp
            </Link>
        </View>
    )
}

export default signIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: "white"
    }
})