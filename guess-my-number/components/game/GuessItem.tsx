import AppText from '../ui/AppText';
import { StyleSheet, View } from 'react-native';
import Colors from '../../utils/constants/colors';
import { useGameContext } from '../../providers/GameProvider';
import useDevice from '../../utils/constants/useDevice';

interface GuessItemProps {
  guess: number;
  guessIndex: number;
}
export default function GuessItem({ guess, guessIndex }:  GuessItemProps) {
  const { rounds } = useGameContext();
  const { size, orientation } = useDevice();

    return (
      <View style={[styles.container, {padding: size == 'large' ? 10 : 6}]}>
        <AppText style={[styles.text, {fontSize: size == 'large' ? 16 : 12}]}>#{rounds - guessIndex}</AppText>
        <AppText style={[styles.text, {fontSize: size == 'large' ? 16 : 12}]}>Opponent's Guess: {guess}</AppText>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent400,
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