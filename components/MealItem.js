import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

function MealItem({ mealData }) {
  const navigation = useNavigation();
  const { title, affordability, complexity, imageUrl, duration } =
    mealData.item;

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() =>
          navigation.navigate("MealDetails", { mealDetail: mealData.item })
        }
      >
        <View>
          <View>
            <Image src={imageUrl} style={styles.mealImage} />
          </View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <MealDetails
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
    alignContent: "center",
  },
  mealImage: {
    width: "100%",
    height: 200,
    alignSelf: "center",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonPressed: {
    opacity: 0.75,
  },
});
