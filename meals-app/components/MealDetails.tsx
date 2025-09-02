import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

interface MealDetailsProps {
  duration: string;
  complexity: string;
  affordability: string;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
export default function MealDetails({duration, complexity, affordability, viewStyle, textStyle}: MealDetailsProps) {
  return (
    <View style={[styles.details, viewStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  },
})