import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Card from './components/Card';
import Ticket from './components/Ticket';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header />
      <Card />
      <Navigation />
      <Ticket />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{backgroundColor: 'black', height: '100%'}
});
