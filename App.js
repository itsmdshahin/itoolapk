import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home/Home';
import TabNavigation from './src/components/TabNavigation/TabNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Firewall /> */}
      <TabNavigation />
      {/* <Button title='helow' /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
});
