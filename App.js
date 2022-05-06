import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// import ChooseNumberSinglePlayer from './screens/ChooseNumberSinglePlayer';
import StartGameScreen from './screens/StartGameScreen';
import ChooseNumberSingleplayer from './screens/singleplayer/ChooseNumberSingleplayer';
import ChooseNumberMultiplayer from './screens/multiplayer/ChooseNumberMultiplayer';

export default function App() {
  // state for player vs computer and player vs player
  const [playMode, setPlayMode] = useState();

  let [fontsLoaded] = useFonts({
    'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function chooseModeHandler(gameMode) {
    setPlayMode(gameMode);
  }

  function goToHomeHandler() {
    setPlayMode(null);
  }

  let screen = <StartGameScreen onPickGameMode={chooseModeHandler} />

  if (playMode === "Singleplayer") {
    screen = <ChooseNumberSingleplayer backPressed={goToHomeHandler} />

  } else if (playMode === "Multiplayer") {
    screen = <ChooseNumberMultiplayer backPressed={goToHomeHandler} />
  }

  return (
    <SafeAreaView style={styles.rootScreen}>
      {screen}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: '#1E1A1D',
    flex: 1,
    padding: 30,
  },
});
