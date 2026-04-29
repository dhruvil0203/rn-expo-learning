import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const products = () => {
    const { products } = useLocalSearchParams()
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'white' }}>{products}</Text>
        </View>
    )
}

export default products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: "white"
    }
})