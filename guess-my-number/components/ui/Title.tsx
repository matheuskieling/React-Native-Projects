import { StyleSheet, Text } from 'react-native';
import Colors from '../../utils/constants/colors';
import AppText from './AppText';
import deviceSize from '../../utils/constants/useDevice';
import useDevice from '../../utils/constants/useDevice';

interface TitleProps {
  children: React.ReactNode;
}
export default function Title(props: TitleProps) {
  const { children } = props;
  const { size, orientation } = useDevice();
  const getMarginBottom = () => {
    if(orientation == 'landscape') {
      return 10;
    }
    return size !== 'small' ? 24 : 12;
  }

  return <AppText style={[styles.title, {fontSize: size !== 'small' ? 24 : 20, marginBottom: getMarginBottom()}]} bold={true}>{children}</AppText>
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: 'white',
  }
})