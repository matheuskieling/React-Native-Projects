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
  const getMarginBottom = () => {
    if (orientation == 'landscape') {
      return 10;
    } else {
      return size !== 'small' ? 24: 12
    }

  }
  return <View style={[styles.container, {width: 80, marginBottom: getMarginBottom() }]}>
    <AppText bold={true} style={[styles.text, {fontSize: size !== 'small' ? 36 : 24}]} >{children}</AppText>
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