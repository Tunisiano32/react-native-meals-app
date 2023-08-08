import React, { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import { Button, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function headerButtonPressHandler() {
    navigation.navigate("Favorites");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Favorites" onPress={headerButtonPressHandler} />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  function renderCategoryItem(item) {
    const { title, color, id } = item.item;
    function onPressHandler() {
      navigation.navigate("MealOverview", {
        categoryId: id,
      });
    }
    return (
      <CategoryGridTile
        title={title}
        color={color}
        onCategoryPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
