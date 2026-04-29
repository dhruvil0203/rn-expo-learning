import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const slug = () => {
    const { slug } = useLocalSearchParams()
    const result = Array.isArray(slug) ? slug.join("/") : slug
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'white' }}>{result}</Text>
        </View>
    )
}

export default slug

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: "white"
    }
})