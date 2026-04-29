import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DocsPage = () => {
  const { slug } = useLocalSearchParams()
  const fullPath = Array.isArray(slug) ? slug.join('/') : slug

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Docs Page</Text>
      <Text style={styles.param}>Path: {fullPath}</Text>
      {Array.isArray(slug) && (
        <View style={styles.segmentsBox}>
          <Text style={styles.segmentsTitle}>URL Segments:</Text>
          {slug.map((segment, index) => (
            <Text key={index} style={styles.segment}>
              [{index}] → {segment}
            </Text>
          ))}
        </View>
      )}
      <Text style={styles.description}>
        This is a catch-all route. The file lives at app/docs/[...slug].tsx{'\n'}
        It captures all nested path segments as an array.
      </Text>
    </View>
  )
}

export default DocsPage

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
    marginBottom: 15,
  },
  segmentsBox: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    width: '100%',
  },
  segmentsTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  segment: {
    fontSize: 16,
    color: '#4da6ff',
    marginVertical: 2,
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    lineHeight: 22,
  },
})