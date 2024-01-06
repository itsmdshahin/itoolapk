import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AllApps from '../AllApps/AllApps';
import HomeApps from '../AllApps/HomeApps';
import FlickeringText from './FlickeringText';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <FlickeringText style={styles.headerText}>
          ITOOLAPK
        </FlickeringText>
      </View>
      <Text style={styles.contentText}>Explore the app to find great features!</Text>
      <HomeApps />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 10, 
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    padding: 20, // Add padding around the text
  },
  flickeringText: {
    color: '#f6b93b',
    fontSize: 42,
    fontWeight: 'bold',
    textShadowColor: '#e55039',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  // Removed content styles since we are not using this view anymore
});
