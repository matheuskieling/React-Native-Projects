import { Image, Text, View, StyleSheet, Pressable, Platform } from 'react-native';
import Meal from '../models/meal';
import MealDetails from './MealDetails';

export interface MealItemProps {
  imageUrl: string;
  title: string;
  duration: string;
  complexity: string;
  affordability: string;
  onPress: () => void;
}
export default function MealItem({imageUrl, title, duration, complexity, affordability, onPress}: MealItemProps) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: 'rgba(0,0,0,0.15)'}}
        style={({pressed}) => pressed && Platform.OS == 'ios' ? styles.buttonPressed : null}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{uri: imageUrl}} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>

      </Pressable>
    </View>

  )
}
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({android: 'hidden'}),
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
})