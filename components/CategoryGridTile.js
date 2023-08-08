import React from "react";
import { Pressable, StyleSheet, View, Text, Platform } from "react-native";

function CategoryGridTile({ title, color, onCategoryPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onCategoryPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    alignItems: "center",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button: {
    flex: 1,
    width: "100%",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "open-sans-bold",
    fontWeight: "900",
    fontSize: 18,
  },
});
