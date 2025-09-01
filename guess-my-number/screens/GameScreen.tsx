import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import { useGameContext } from '../providers/GameProvider';
import Colors from '../utils/constants/colors';
import Card from '../components/ui/CardComponent';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../components/ui/AppText';
import GuessItem from '../components/game/GuessItem';
import useDevice from '../utils/constants/useDevice';
export default function GameScreen() {
  const {
    pickedNumber,
    guesses,
    rounds,
    handleNextRound,
    handleResetGame,
    handleGameOver,
    handleAddNewGuess,
  } = useGameContext();
  const [max, setMax] = useState<number>(99);
  const [min, setMin] =  useState<number>(1);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const { size, orientation } = useDevice();

  const handleSetMin = () => {
    if (currentNumber === null) return;
    if (currentNumber > pickedNumber!) {
      Alert.alert('Dont lie!', "Something is feeling off. Don't lie to me!", [{text: 'Sorry', style:"default"}])
      return;
    }
    const newMin = currentNumber + 1
    setMin(newMin);
    guessNumber(newMin, max);
  }

  const handleSetMax = () => {
    if (currentNumber === null) return;
    if (currentNumber < pickedNumber!) {
      Alert.alert('Dont lie!', "Something is feeling off. Don't lie to me!", [{text: 'Sorry', style:"default"}])
      return;
    }
    const newMax = currentNumber - 1
    setMax(newMax);
    guessNumber(min, newMax);
  }

  const generateFirstGuess = (minValue: number, maxValue: number): void => {
    const newNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
    setCurrentNumber(newNumber);
    checkWin(newNumber);
    handleNextRound();
    handleAddNewGuess(newNumber);
  }
  const checkWin = (newNumber: number): void => {
    if (newNumber === pickedNumber!) {
      handleGameOver();
      return;
    }
  }

  const guessNumber = (minValue: number, maxValue: number): void => {
    const newNumber = Math.floor(((maxValue - minValue) / 2) + minValue);
    setCurrentNumber(newNumber);
    checkWin(newNumber);
    handleNextRound();
    handleAddNewGuess(newNumber);
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        {currentNumber == null &&
          <View style={styles.startGameContainer}>
            <PrimaryButton customStyle={{flex: 1, fontSize: 32, fontWeight: 'bold', backgroundColor: Colors.accent500}} onPress={() => generateFirstGuess(min, max)}>Start Game</PrimaryButton>
          </View>
        }
        {currentNumber != null &&
          <View style={[{flex: 1, marginBottom: 26}, orientation == 'landscape' && {flexDirection: 'row', gap: 10}]}>
            <View>
              <Title>Opponent's guess</Title>
              <NumberContainer>{currentNumber}</NumberContainer>
              <Card>
                <AppText style={[styles.feedbackText, {fontSize: size !== 'small' ? 16 : 12}]}>Higher or lower?</AppText>
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <PrimaryButton customStyle={{color: Colors.accent400}} onPress={handleSetMax}>
                      <Ionicons name="remove" size={size !== 'small' ? 24 : 14} />
                    </PrimaryButton>
                  </View>
                  <View style={styles.button}>
                    <PrimaryButton customStyle={{color: Colors.accent400}} onPress={handleSetMin}>
                      <Ionicons name="add" size={size !== 'small' ? 24 : 14} />
                    </PrimaryButton>
                  </View>
                </View>
              </Card>
            </View>
            <FlatList
              data={guesses}
              renderItem={(itemData) => <GuessItem guess={itemData.item} guessIndex={itemData.index} />}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        }
      </View>
      <View>
        <PrimaryButton onPress={handleResetGame}>Pick a different number</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  startGameContainer: {
    marginVertical: 'auto',
    height: 100,
  },
  outerContainer: {
    flex: 1,
    padding: 24,
  },
  innerContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1
  },
  feedbackText: {
    color: Colors.accent400,
    marginBottom: 16,
    textAlign: 'center'
  }
})