import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

interface SubtitleProps {
  children: React.ReactNode;
  viewStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}
export default function Subtitle({children, textStyles, viewStyles}: SubtitleProps) {
  return (

    <View style={[styles.subtitleContainer, viewStyles]}>
      <Text style={[styles.subtitle, textStyles]}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 1,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});