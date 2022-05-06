import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function Title({ children, style }) {
  return <Text style={[styles.titleTxt, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  titleTxt: {
    fontFamily: 'pacifico-regular',
    fontSize: 32,
    letterSpacing: 2,
    color: 'black',
  },
});
