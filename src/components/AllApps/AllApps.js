import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AllApps = () => {
    return (
        <View>
            <Text>AllApps</Text>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to Our App</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>Explore the app to find great features!</Text>
            </View>
        </View>
    )
}

export default AllApps


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
    },
    header: {
      paddingTop: 60,
      paddingBottom: 20,
      backgroundColor: '#4A90E2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    contentText: {
      fontSize: 18,
      color: '#333333',
      textAlign: 'center',
    },
});
