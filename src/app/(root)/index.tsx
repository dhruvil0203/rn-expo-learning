import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Link href={"/about"} style={{ fontSize: 20, color: 'blue' }}>
        About
      </Link>
      <Link href={"/contact"} style={{ fontSize: 20, color: 'blue' }}>
        Contact
      </Link>
      <Link href={"/overview"} style={{ fontSize: 20, color: 'blue' }}>
        Overview
      </Link>
      <Link href={"/user/123" as any} style={{ fontSize: 20, color: 'blue' }}>
        User
      </Link>
      <Link href={"/products/iphone" as any} style={{ fontSize: 20, color: 'blue' }}>
        Products
      </Link>
      <Link href={"/docs/feature/introduction/part1/part2" as any} style={{ fontSize: 20, color: 'blue' }}>
        Docs
      </Link>
      <Link href={"/sign-in" as any} style={{ fontSize: 20, color: 'blue' }}>
        Sign-In
      </Link>
      <Link href={"/sign-up" as any} style={{ fontSize: 20, color: 'blue' }}>
        Sign-Up
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
  },
})