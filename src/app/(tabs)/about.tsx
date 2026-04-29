import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 About Page</Text>
      <Text style={styles.description}>
        This is a static route. The file lives at app/about.tsx
      </Text>
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
