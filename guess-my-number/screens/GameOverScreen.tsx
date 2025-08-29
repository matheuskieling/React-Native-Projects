import { Image, StyleSheet, View } from 'react-native';
import { useGameContext } from '../providers/GameProvider';
import AppText from '../components/ui/AppText';
import Title from '../components/ui/Title';
import Colors from '../utils/constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import useDevice from '../utils/constants/useDevice';

export default function GameOverScreen() {
  const { size, orientation } = useDevice();
  const { pickedNumber, rounds, handleResetGame } = useGameContext();
  return  (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, {width: size == 'large' ? 300 : 200}]}>
          <Image style={styles.image}  source={require('../assets/images/success.png')} />
        </View>
        <AppText style={styles.text}>
          Your number is
          <AppText style={styles.innerText} bold={true}> {pickedNumber}</AppText>
          . Your phone took
          <AppText style={styles.innerText} bold={true}> {rounds} </AppText>
          rounds to guess it
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleResetGame}>Start new Game</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginVertical: 'auto',
  },
  innerContainer: {
    flex: 1
  },
  imageContainer: {
    overflow: 'hidden',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginVertical: 36,
    borderRadius: '50%',
    borderWidth: 3,
    borderColor: Colors.primary700,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  innerText: {
    color: Colors.primary400,
  },
  buttonContainer: {
    marginVertical: 'auto'
  }
});