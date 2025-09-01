import { StyleSheet, View } from 'react-native';
import Colors from '../../utils/constants/colors';
import useDevice from '../../utils/constants/useDevice';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  const { size, orientation } = useDevice();
  const getMarginTop = () => {
    if (orientation == 'landscape') {
      return 6;
    } else {
      return size !== 'small' ? 32 : 16
    }
  }
  return (
    <View style={[styles.container, {marginTop: getMarginTop(), minWidth: orientation == 'landscape' ? 400 : 0 , maxWidth: orientation == 'landscape' ? 400 : 9999}]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginVertical: 8,
  },
});
