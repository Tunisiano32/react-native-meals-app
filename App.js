import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View, StyleSheet, Text } from "react-native";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Provider } from "react-redux";
import store from "./store/store";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <View onLayout={onLayoutRootView} style={styles.appContainer}>
        <NavigationContainer>
          <Provider store={store}>
            <Stack.Navigator initialRouteName="MealCategories">
              <Stack.Screen
                name="MealCategories"
                options={{
                  title: "All Categories",
                }}
                component={CategoriesScreen}
              />
              <Stack.Screen
                name="MealOverview"
                component={MealsOverviewScreen}
              />
              <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
              <Stack.Screen name="Favorites" component={FavoriteScreen} />
            </Stack.Navigator>
          </Provider>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 60,
  },
});
