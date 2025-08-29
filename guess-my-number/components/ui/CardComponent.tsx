import { StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import Colors from '../../utils/constants/colors';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.primary700,
    marginTop: 32,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginVertical: 8,
  },
});
