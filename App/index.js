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
import HomeScreenContainer from './screens/home/HomeScreenContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
                        } else if (route.name === 'Create') {
                            iconName = 'plus';
                            return <View style={{
                                position: 'absolute',
                                backgroundColor: '#fd3e3e',
                                paddingRight: 4,
                                borderRadius: 8,
                                top: 16,
                            }}>
                                <View style={{
                                    backgroundColor: '#4de8f4',
                                    paddingLeft: 4,
                                    borderRadius: 8,
                                }}>
                                    <View style={{
                                        backgroundColor: 'black',
                                        paddingHorizontal: 6,
                                        borderRadius: 8,
                                    }}>
                                        <MaterialCommunityIcons name={iconName} size={size} color={'white'}/>
                                    </View>
                                </View>
                            </View>;
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
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Home" component={HomeScreenContainer}/>
                <Tab.Screen name="Discover" component={HomeScreenContainer}/>
                <Tab.Screen name="Create" component={HomeScreenContainer} options={{title: ''}}/>
                <Tab.Screen name="Inbox" component={HomeScreenContainer}/>
                <Tab.Screen name="Me" component={HomeScreenContainer}/>
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>;
};

const styles = StyleSheet.create({});

export default App;
