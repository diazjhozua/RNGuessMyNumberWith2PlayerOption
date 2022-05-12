import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, BackHandler, Alert, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'


import Title from "../../components/ui/Title";
import Design from "../../constants/design";
import NumberContainer from "../../components/gameScreenSinglePlayer/NumberContainer";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Card from "../../components/ui/Card";
import ComputerLoading from "../../components/ui/ComputerLoading";
import GuessLogItem from "../../components/ui/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }

}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreenSingleplayer({ userNumber, backPressed, onGameOver }) {
  const [isThinking, setIsThinking] = useState(true);
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);



  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back? \n\n(The current game will be reset once you leave this screen)", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: backPressed }
    ]);
    return true;
  };

  useEffect(() => {
    setTimeout(function () {
      console.log('hehehe')
      setIsThinking(false);

      if (currentGuess === userNumber) {
        console.log("winner")
        // onGameOver(guessRounds.length);
      }

    }, 1000);


  }, [currentGuess, userNumber]);


  useEffect(() => {
    console.log('once');
    BackHandler.addEventListener("hardwareBackPress", backAction);

    minBoundary = 1;
    maxBoundary = 100;

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);

  }, []);


  function nextGuessHandler(direction) {
    // check first if the direction was correct

    if (
      direction === 'lower' && currentGuess < userNumber ||
      direction === 'greater' && currentGuess > userNumber) {
      Alert.alert("Don't lie!", 'You know that this is wrong',
        [{ text: 'Sorry!', style: 'destructive' }]
      );
      return;
    }

    setIsThinking(true);

    // 'lower', 'greater'
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }

    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);

    console.log(guessRounds);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <>
      <View >
        <Title style={[Design.textCenter]}>Computer's guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={[Design.resetMarginTop]}>
          {/* Choose number */}
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><AntDesign name="minus" size={24} color="white" /></PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><AntDesign name="plus" size={24} color="white" /></PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
      {/* LOG ROUNDS */}
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList data={guessRounds} renderItem={itemData => {
          return <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />
        }}
          keyExtractor={(item, index) => {
            return item;
          }}
          alwaysBounceHorizontal={false} />
      </View>
      <ComputerLoading visible={isThinking} />

    </>
  );
}

function eme() {

}
const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }

});
