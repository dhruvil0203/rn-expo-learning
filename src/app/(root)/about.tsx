import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'white' }}>About</Text>
      <Link href={"/" as any} style={{ fontSize: 20, color: 'white' }}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Link>
      <Link href={"/sign-in" as any} style={{ fontSize: 20, color: 'white' }}>
        SignIn
      </Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})