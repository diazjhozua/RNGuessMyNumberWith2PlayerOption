import { useEffect } from "react";
import { View, Text, BackHandler, StyleSheet, Image, TextInput } from "react-native";
import Card from "../../components/ui/Card";
import InstructionTxt from "../../components/ui/InstructionTxt";
import Title from "../../components/ui/Title";
import Design from "../../constants/design";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function ChooseNumberSingleplayer({ backPressed }) {
  // backbutton
  const backAction = () => {
    backPressed();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <View>
      {/* Title */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/computer.png')} />
      </View>

      <Title>Singleplayer Mode</Title>


      <Card>
        <Text style={styles.cardText}>Enter a number</Text>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize='none'
          autoFocus={true}
          autoCorrect={false}
        // onChangeText={numberInputHandler}
        // value={enteredNumber}
        />

        {/* Choose number */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>

      </Card>

      <InstructionTxt style={Design.mtSM}>
        Choose a number between 1-99, the computer will guess the number and each guess you will choose
        if the guess number is higher or lower.
      </InstructionTxt>



      {/* Two buttons reset/confirm */}

    </View>
  );
}
const styles = StyleSheet.create({

  imageContainer: {
    width: 100,
    height: 100,
    margin: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    fontSize: 32,
    fontFamily: 'roboto-bold',
    color: 'black',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }

});