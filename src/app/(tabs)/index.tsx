import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏠 Expo Router Examples</Text>

      <Text style={styles.sectionTitle}>Static Routes</Text>
      <Link href="/about" style={styles.link}>
        → About Page
      </Link>
      <Link href="/details" style={styles.link}>
        → Details Page
      </Link>

      <Text style={styles.sectionTitle}>Dynamic Routes</Text>
      <Link href={"/user/john" as any} style={styles.link}>
        → User: john
      </Link>
      <Link href={"/user/456" as any} style={styles.link}>
        → User: 456
      </Link>
      <Link href={"/products/iphone" as any} style={styles.link}>
        → Product: iphone
      </Link>
      <Link href={"/products/macbook" as any} style={styles.link}>
        → Product: macbook
      </Link>

      <Text style={styles.sectionTitle}>Catch-All Route (docs/...slug)</Text>
      <Link href={"/docs/react/intro" as any} style={styles.link}>
        → Docs: react/intro
      </Link>
      <Link href={"/docs/expo/router/setup" as any} style={styles.link}>
        → Docs: expo/router/setup
      </Link>
      <Link href={"/docs/feature/introduction/part1/part2" as any} style={styles.link}>
        → Docs: feature/introduction/part1/part2
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
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  link: {
    fontSize: 18,
    color: '#4da6ff',
    marginVertical: 4,
    alignSelf: 'flex-start',
  },
})
