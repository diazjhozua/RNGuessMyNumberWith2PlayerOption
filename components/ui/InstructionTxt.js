import { Text, StyleSheet } from "react-native";

export default function InstructionTxt({ children, style }) {
  return <Text style={[styles.titleTxt, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  titleTxt: {
    fontFamily: 'roboto-light',
    color: 'black',
    fontSize: 16,

    // letterSpacing: 2,
  },
});
