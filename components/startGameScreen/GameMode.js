import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export default function GameMode({ text, image, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed ?
        [styles.cardOptionContainer, styles.pressed] : styles.cardOptionContainer}
      onPress={onPress}
      android_ripple={{ color: "white" }}
    >
      <Text style={styles.titleTxt}>{text}</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={image} />
      </View>
    </Pressable>
  );

}

const styles = new StyleSheet.create({
  cardOptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    // marginHorizontal: 24,
    padding: 16,
    backgroundColor: 'black',
    borderRadius: 8,
    // elavation is android property only
    elevation: 4,
    // for ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  titleTxt: {
    color: 'white',
    fontFamily: 'roboto-bold',
    textAlign: 'center',
  },
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
  pressed: {
    opacity: 0.75
  },
});