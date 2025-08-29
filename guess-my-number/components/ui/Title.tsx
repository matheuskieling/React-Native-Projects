import { StyleSheet, Text } from 'react-native';
import Colors from '../../utils/constants/colors';
import AppText from './AppText';

interface TitleProps {
  children: React.ReactNode;
}
export default function Title(props: TitleProps) {
  const { children } = props;

  return <AppText style={styles.title} bold={true}>{children}</AppText>
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  }
})