import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/constants/colors';
import AppText from './AppText';
import useDevice from '../../utils/constants/useDevice';
interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  customStyle?: {
    flex?: number,
    fontSize?: number,
    fontWeight?: string,
    backgroundColor?: string
    color?: string
  };
}
export default function PrimaryButton({ children, onPress, customStyle } : PrimaryButtonProps) {
  const { size, orientation } = useDevice();
  return (
    <View style={[styles.outerContainer, {flex: customStyle?.flex ?? 0}]}>
      <Pressable
        style={({pressed}) =>
          pressed ?
            [styles.pressed, styles.innerContainer, {flex: customStyle?.flex ?? 0, backgroundColor: customStyle?.backgroundColor ?? Colors.primary400}]
            : [styles.innerContainer, {flex: customStyle?.flex ?? 0, backgroundColor: customStyle?.backgroundColor ?? Colors.primary400}] }
        android_ripple={{color: Colors.accent400}}
        onPress={onPress}
      >
        <AppText style={[styles.title, {fontSize: customStyle?.fontSize ?? (size == 'large' ? 16 : 12), color: customStyle?.color ?? 'white'}]}>
          {children}
        </AppText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  title: {
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  }
})