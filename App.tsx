import React from 'react';
import {SafeAreaView} from 'react-native';
import {color} from './src/components/config.ts';
import {HomePage} from './src/pages';
export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: color.secondaryBackgroundColor,
        flex: 1,
      }}>
      <HomePage />
    </SafeAreaView>
  );
}
