import { ImageBackground, StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground imageStyle={styles.image} style={styles.container} source={require('./assets/images/background.png')} resizeMode={'cover'}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.15
  }
});
