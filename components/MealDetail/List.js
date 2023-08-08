import React from "react";
import { StyleSheet, Text, View } from "react-native";

function List({ items }) {
  return items.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text key={item}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#ececec",
  },
});
