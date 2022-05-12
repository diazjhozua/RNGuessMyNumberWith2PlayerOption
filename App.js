import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import ChooseNumberSingleplayer from './screens/singleplayer/ChooseNumberSingleplayer';
import ChooseNumberMultiplayer from './screens/multiplayer/ChooseNumberMultiplayer';
import GameScreenSingleplayer from './screens/singleplayer/GameScreenSingleplayer';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  // state for player vs computer and player vs player
  const [playMode, setPlayMode] = useState();
  // state for when the user picked a number in singleplayer
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  // state to determine when the game is over 
  const [gameIsOver, setGameIsOver] = useState(false);

  function pickerSingleNumberHandler(pickerNumber) {
    console.log('ok')
    setUserNumber(pickerNumber);
    // setGameIsOver(false);
  }


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
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }


  function goToHomeHandler() {
    setPlayMode(null);
    setGameIsOver(false);
  }

  function goToChooseNumberSinglePlayerHandler() {
    console.log("exit");
    setUserNumber(null);
  }

  let screen = <StartGameScreen onPickGameMode={chooseModeHandler} />

  if (playMode === "Singleplayer") {
    screen = <ChooseNumberSingleplayer backPressed={goToHomeHandler} onPickNumber={pickerSingleNumberHandler} />
  } else if (playMode === "Multiplayer") {
    screen = <ChooseNumberMultiplayer backPressed={goToHomeHandler} />
  }

  if (userNumber) {
    screen = <GameScreenSingleplayer userNumber={userNumber} backPressed={goToChooseNumberSinglePlayerHandler} onGameOver={gameOverHandler} />
  }

  return (
    <SafeAreaView style={styles.rootScreen}>
      {/* {screen} */}
      <GameOverScreen />
      {/* <GameScreenSingleplayer userNumber={23} backPressed={goToChooseNumberSinglePlayerHandler} onGameOver={gameOverHandler} /> */}
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
