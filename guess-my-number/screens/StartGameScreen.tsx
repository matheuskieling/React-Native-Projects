import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../utils/constants/colors';
import { useGameContext } from '../providers/GameProvider';
import Title from '../components/ui/Title';
import Card from '../components/ui/CardComponent';
import AppText from '../components/ui/AppText';
import useDevice from '../utils/constants/useDevice';

export default function StartGameScreen() {
  const { handlePickNumber } = useGameContext();
  const [inputNumber, setInputNumber] = useState('');
  const { size, orientation } = useDevice();
  const handleInputChange = (input: string) => {
    setInputNumber(input.trim());
  }
  const handleConfirmInput = () => {
    const chosenNumber = parseInt(inputNumber.trim());
    if (inputNumber.trim().length === 0 || isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'OK', style: 'destructive', onPress: handleResetInput}]
      );
      return;
    }
    handlePickNumber(chosenNumber);
  }
  const handleResetInput = () => {
    setInputNumber('');
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: orientation == 'portrait' ? 100 : 20,}]}>
          <Title>Guess My Number</Title>
          <View style={[styles.cardContainer, {alignItems: orientation ==  'landscape' ? 'center' : 'stretch'}]}>
            <Card>
              <AppText style={styles.inputLabel}>Enter a number</AppText>
              <TextInput
                style={styles.input} maxLength={2}
                keyboardType={'number-pad'}
                autoCapitalize={"none"}
                autoCorrect={false}
                value={inputNumber}
                onChangeText={handleInputChange}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    marginHorizontal: 24,
    flex: 1,
  },
  cardContainer: {
    marginHorizontal: 24,
  },
  inputLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.accent400,
  },
  input: {
    fontFamily: 'open-sans-bold',
    margin: 'auto',
    height: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent400,
    borderBottomWidth: 2,
    color: Colors.accent400,
    textAlign: 'center',
    width: 50,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
})