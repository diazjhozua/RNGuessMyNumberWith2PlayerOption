import { View, Text, StyleSheet, Modal } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
export default function ComputerLoading({ visible }) {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={[styles.container]}>
        <Text style={styles.text}>I'm guessing please wait...</Text>
        <View style={[styles.animateContainer]}>
          <LottieView source={require('../../assets/loading/thinking.json')}
            autoPlay loop />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: 1,
  },
  text: {
    fontSize: 32,
    fontFamily: 'roboto-bold'
  },
  animateContainer: {
    width: 400,
    height: 400,
  }
});