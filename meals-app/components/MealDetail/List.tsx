import { Text, View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ListProps {
  items: string[],
  viewStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>
}

export default function List({items, textStyles, viewStyles}: ListProps) {
  return items.map((item: string, index: number) => (
        <View style={[styles.listItem, viewStyles]} key={index}>
          <Text style={[styles.itemText, textStyles]}>{item}</Text>
        </View>
  ))
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  }
});