import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../App';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

export default function MealOverviewScreen() {
  const navigation = useNavigation<StackNavigationProp<RootParamList, 'MealOverview'>>()
  const route = useRoute<RouteProp<RootParamList, 'MealOverview'>>()
  const meal = MEALS.find((meal: Meal) => meal.id === route.params.mealId)
  if (!meal) {
    Alert.alert('Meal not found!')
    navigation.navigate('MealsCategories');
    return;
  }
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <Image source={{uri: meal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          textStyle={styles.detailsText}

        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List items={meal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List items={meal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },
  container: {},
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    color: 'white',
  },
  detailsText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center'
  }
})