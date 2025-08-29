import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../../utils/constants/colors';
import AppText from '../ui/AppText';
import useDevice from '../../utils/constants/useDevice';
interface NumberContainerProps {
  children: React.ReactNode;
}


export default function NumberContainer(props: NumberContainerProps) {
  const { size, orientation } = useDevice();
  const { children } = props;
  return <View style={[styles.container, {width: size == 'large' ? 80 : 60, marginVertical: size == 'large' ? 24: 12}]}>
    <AppText bold={true} style={[styles.text, {fontSize: size == 'large' ? 36 : 24}]} >{children}</AppText>
  </View>
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent400,
    aspectRatio: 1,
    borderRadius: '50%',
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent400,
  }
})