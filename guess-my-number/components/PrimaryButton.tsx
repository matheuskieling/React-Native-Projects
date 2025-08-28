import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';

export default function PrimaryButton({ children } : { children: React.ReactNode}) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({pressed}) =>
          pressed ?
            [styles.pressed, styles.innerContainer]
            : styles.innerContainer }
        android_ripple={{color: '#640233'}}>
        <Text style={styles.title}>
          {children}
        </Text>
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
    backgroundColor: '#72063c',
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