import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Design from '../constants/design'
import LottieView from 'lottie-react-native';

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Title style={[Design.textCenter]}>Yehey!</Title>
      <View style={[styles.animateContainer]}>
        <LottieView style={styles.image} source={require('../assets/loading/thinking.json')}
          autoPlay loop />
      </View>
      {/* Image Moving */}



      {/* Instruction */}

      <Text>GameOver</Text>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  animateContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})