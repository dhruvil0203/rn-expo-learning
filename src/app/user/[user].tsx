import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const UserProfile = () => {
  const { user } = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 User Profile</Text>
      <Text style={styles.param}>User: {user}</Text>
      <Text style={styles.description}>
        This is a dynamic route. The file lives at app/user/[user].tsx{'\n'}
        The param "user" is extracted via useLocalSearchParams().
      </Text>
    </View>
  )
}

export default UserProfile

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
