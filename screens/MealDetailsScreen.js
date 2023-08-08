import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favorites";

function MealDetailsScreen({ route }) {
  const { mealDetail } = route.params;
  const navigation = useNavigation();
  const {
    imageUrl,
    title,
    affordability,
    complexity,
    duration,
    ingredients,
    steps,
    id,
  } = mealDetail;

  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealsIds.includes(id);

  function headerButtonPressHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(addFavorite({ id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={headerButtonPressHandler}
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="blue"
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image src={imageUrl} style={styles.mealImage} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
      <Subtitle>Ingredients</Subtitle>
      <List items={ingredients} />
      <Subtitle>Steps</Subtitle>

      <List items={steps} />
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 30,
  },
  mealImage: {
    width: "100%",
    height: 350,
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 9,
    textAlign: "center",
  },
});
