import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootParamList } from '../App';
import Meal from '../models/meal';
import MealItem, { MealItemProps } from '../components/MealItem';
import { useLayoutEffect } from 'react';

export default function MealsOverviewScreen() {
  const navigation = useNavigation<StackNavigationProp<RootParamList, 'MealsOverview'>>();
  const route = useRoute<RouteProp<RootParamList, 'MealsOverview'>>();
  const categoryId = route.params.categoryId

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId)!.title
    navigation.setOptions({title: categoryTitle })
  }, [navigation, categoryId])

  const displayedMeals = MEALS.filter((meal: Meal) => {
    return meal.categoryIds.includes(categoryId);
  });
  console.log(displayedMeals);
  const renderMealItem = (data: ListRenderItemInfo<Meal>) => {
    const item = data.item;
    const props: MealItemProps = {
      imageUrl: item.imageUrl,
      title: item.title,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress: () => {
        navigation.navigate('MealOverview', { mealId: item.id })
      },
    }
    return (
      <MealItem {...props} />
    )
  }

  return (
    <View>
      <FlatList data={displayedMeals}
                keyExtractor={(meal: Meal) => meal.id}
                renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})