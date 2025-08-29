import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from './utils/constants/colors';
import GameRoot from './GameRoot';
import GameProvider from './providers/GameProvider';
import { useFonts } from 'expo-font';
import AppLoading  from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GameProvider>
      <LinearGradient colors={[Colors.primary600, Colors.accent400]} style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground imageStyle={styles.image} style={styles.container} source={require('./assets/images/background.png')} resizeMode={'cover'}>
          <SafeAreaView style={styles.container}>
            <GameRoot />
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </GameProvider>
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
