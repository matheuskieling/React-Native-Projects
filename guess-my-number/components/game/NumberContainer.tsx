import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../utils/constants/colors';
import AppText from '../ui/AppText';

interface NumberContainerProps {
  children: React.ReactNode;
}
export default function NumberContainer(props: NumberContainerProps) {
  const { children } = props;
  return <View style={styles.container}>
    <AppText bold={true} style={styles.text} >{children}</AppText>
  </View>
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent400,
    width: 80,
    height: 80,
    borderRadius: '50%',
    marginVertical: 24,
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent400,
    fontSize: 36,
  }
})