import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
export default function PrimaryButton({ children } : { children: React.ReactNode}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  title: {

  }
})