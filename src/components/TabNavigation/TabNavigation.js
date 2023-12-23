import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Blog from '../../pages/Blog/Blog';
import AllApps from '../AllApps/AllApps';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    const HomeScreen = () => {
        const navigation = useNavigation();

        return (
            <View style={styles.dcontainer}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => {
                        // Navigate to the Settings screen.
                        navigation.navigate('AllApps');
                    }}
                />

            </View>
        );
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Blog') {
                            iconName = 'book';
                        } else if (route.name === 'All App') {
                            iconName = 'th-large'; // Using 'th-large' for the All Apps icon
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: {
                        backgroundColor: 'tomato', // Change this to your desired color
                    },
                    headerTintColor: 'white', // Change this to your desired text color
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Blog" component={Blog} />
                <Tab.Screen name="All App" component={AllApps} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    dcontainer: {
        flex: 1,
        backgroundColor: '#383B3F',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});