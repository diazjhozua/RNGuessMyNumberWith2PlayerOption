import { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";


export default function ChooseNumberMultiplayer({ backPressed }) {
  const backAction = () => {
    backPressed();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return <View><Text>Multiplayer</Text></View>
}