import { Text, View, StyleSheet, Image, Pressable } from "react-native";

import GameMode from "../components/startGameScreen/GameMode";

import Title from "../components/ui/Title";
import InstructionTxt from "../components/ui/InstructionTxt";

export default function StartGameScreen({ onPickGameMode }) {

  return (
    <View style={styles.rootContainer}>
      {/* Title App */}

      <Title>GUESS MY NUMBER</Title>
      {/* <Text style={styles.titleTxt}></Text> */}
      <InstructionTxt>Choose game mode (Offline Game)</InstructionTxt>
      {/* Game Mode */}
      <GameMode text={"PLAYER VS COMPUTER"}
        image={require('../assets/images/computer.png')}
        onPress={() => onPickGameMode("Singleplayer")}
      />
      <GameMode
        text={"PLAYER VS PLAYER"}
        image={require('../assets/images/player-versus-player.png')}
        onPress={() => onPickGameMode("Multiplayer")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 30,
  },

});