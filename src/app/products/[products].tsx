import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Product = () => {
  const { products } = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Product Page</Text>
      <Text style={styles.param}>Product: {products}</Text>
      <Text style={styles.description}>
        This is a dynamic route. The file lives at app/products/[products].tsx{'\n'}
        The param "products" is extracted via useLocalSearchParams().
      </Text>
    </View>
  )
}

export default Product

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
  param: {
    fontSize: 20,
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    lineHeight: 22,
  },
})
