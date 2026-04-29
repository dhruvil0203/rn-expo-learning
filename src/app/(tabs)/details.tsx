import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Details Page</Text>
      <Text style={styles.description}>
        This is another static route. The file lives at app/details.tsx
      </Text>
    </View>
  )
}

export default details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
  },
})