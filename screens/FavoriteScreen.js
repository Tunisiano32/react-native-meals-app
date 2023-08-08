import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {
  const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMeals.includes(meal.id)
  );

  function renderMealItem(itemData) {
    return <MealItem mealData={itemData} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default FavoriteScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
