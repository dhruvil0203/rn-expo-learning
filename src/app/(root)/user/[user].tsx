import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const User = () => {
    const { user } = useLocalSearchParams()
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'white' }}>{user}</Text>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: "white"
    }
})