import AppText from '../ui/AppText';
import { StyleSheet, View } from 'react-native';
import Colors from '../../utils/constants/colors';
import { useGameContext } from '../../providers/GameProvider';

interface GuessItemProps {
  guess: number;
  guessIndex: number;
}
export default function GuessItem({ guess, guessIndex }:  GuessItemProps) {
  const { rounds } = useGameContext();

    return (
      <View style={styles.container}>
        <AppText style={styles.text}>#{rounds - guessIndex}</AppText>
        <AppText style={styles.text}>Opponent's Guess: {guess}</AppText>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent400,
    padding: 10,
    marginVertical: 4,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {

  },
})