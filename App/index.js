/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreenContainer from './screens/home/home-screen-container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleConstants from './styles';
import CreateButton from './components/create-button';
import InboxScreenContainer from './screens/inbox/inbox-screen-container';
import MeScreenContainer from './screens/me/me-screen-container';


const Tab = createBottomTabNavigator();

const App: () => Node = () => {
    useEffect(() => [
        RNBootSplash.hide({fade: true}),
    ]);

    return <SafeAreaProvider>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Discover') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === 'Inbox') {
                            iconName = focused ? 'message-text' : 'message-text-outline';
                            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
                        } else if (route.name === 'Me') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: StyleConstants.BLACK,
                    inactiveTintColor: StyleConstants.SPANISH_GRAY,
                    style: {backgroundColor: StyleConstants.WHITE, borderTopWidth: 0},
                }}>
                <Tab.Screen name="Home" component={HomeScreenContainer}/>
                <Tab.Screen name="Discover" component={HomeScreenContainer}/>
                <Tab.Screen name="Create" component={HomeScreenContainer}
                            options={{title: '', tabBarIcon: (props) => <CreateButton/>}}/>
                <Tab.Screen name="Inbox" component={InboxScreenContainer}/>
                <Tab.Screen name="Me" component={MeScreenContainer}/>
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>;
};


export default App;
