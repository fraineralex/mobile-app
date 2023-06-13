import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const home = () => {
  const fullname = 'Frainer Alexander Encarnación'
  const profession = 'Software Engineer'
  const email = 'frainerexample@gmail.com'
  const imagePath = 'https://unavatar.io/fraineralex'
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: imagePath }} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>{fullname}</Text>
      <Text style={styles.text}>{profession}</Text>
      <Text style={styles.text}>{email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    fontSize: 18,
    marginBottom: 3,
  }
})

export default home