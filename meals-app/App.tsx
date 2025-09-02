import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CatogoriesScreen';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps
} from 'react-native-screens/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { CATEGORIES } from './data/dummy-data';
import MealOverviewScreen from './screens/MealOverviewScreen';

const Stack = createNativeStackNavigator();
export type RootParamList = {
  MealsCategories: undefined,
  MealsOverview: { categoryId: string }
  MealOverview: { mealId: string }
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25'
            }
          }}>
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
              title: 'All Categories',
            } as NativeStackNavigationOptions } />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealOverview" component={MealOverviewScreen} options={{
              title: 'Meal Details',
            } as NativeStackNavigationOptions } />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
