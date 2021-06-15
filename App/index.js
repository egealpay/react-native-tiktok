/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreenContainer from './screens/home/HomeScreenContainer';


const Tab = createBottomTabNavigator();

const App: () => Node = () => {
    useEffect(() => [
        RNBootSplash.hide({fade: true}),
    ]);

    return <SafeAreaProvider>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreenContainer}/>
                <Tab.Screen name="Discover" component={HomeScreenContainer}/>
                <Tab.Screen name="Create" component={HomeScreenContainer}/>
                <Tab.Screen name="Inbox" component={HomeScreenContainer}/>
                <Tab.Screen name="Me" component={HomeScreenContainer}/>
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>;
};

const styles = StyleSheet.create({});

export default App;
