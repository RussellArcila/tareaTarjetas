import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface infoAttributes{
    text: string
}

export default function Name({text}: infoAttributes): JSX.Element {
  return (
    <View>
      <Text style={styles.sectionContainer}>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sectionContainer: {
    fontSize: 15,
    paddingLeft: 3,
    fontWeight: '600',
    color: 'green',
    textAlign: 'center',
  }
});