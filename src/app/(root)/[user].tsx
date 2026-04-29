import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const user = () => {
    const { userId } = useLocalSearchParams()
    return (
        <View>
            <Text>{userId}</Text>
        </View>
    )
}

export default user

const styles = StyleSheet.create({})