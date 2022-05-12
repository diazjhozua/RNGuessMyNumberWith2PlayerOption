import { View, StyleSheet } from "react-native";

export default function Card({ children, style }) {
  return <View style={[styles.inputContainer, style]}>{children}</View>
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    // marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#f1f3f5',
    borderRadius: 8,
    // elavation is android property only
    elevation: 4,
    // for ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

  },
});
