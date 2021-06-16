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
import {createStackNavigator} from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DiscoverStack = createStackNavigator();
const CreateStack = createStackNavigator();
const InboxStack = createStackNavigator();
const MeStack = createStackNavigator();


function meStack({navigation}) {
    return <MeStack.Navigator>
        <MeStack.Screen
            name="MeStack"
            component={MeScreenContainer}
            options={{
                title: 'Profile',
                headerRight: () => (
                    <MaterialCommunityIcons
                        name={'dots-vertical'}
                        size={24}
                        style={{marginRight: 16}}
                    />
                ),
            }}
        />
    </MeStack.Navigator>;
}

function inboxStack({navigation}) {
    return <InboxStack.Navigator>
        <InboxStack.Screen
            name="InboxStack"
            component={InboxScreenContainer}
            options={{title: 'All Activity'}}
        />
    </InboxStack.Navigator>;
}

function createStack({navigation}) {
    return <CreateStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <CreateStack.Screen
            name="CreateStack"
            component={HomeScreenContainer}
        />
    </CreateStack.Navigator>;
}

function discoverStack({navigation}) {
    return <DiscoverStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <DiscoverStack.Screen
            name="DiscoverStack"
            component={HomeScreenContainer}
        />
    </DiscoverStack.Navigator>;
}

function homeStack({navigation}) {
    return <HomeStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <HomeStack.Screen
            name="HomeStack"
            component={HomeScreenContainer}
        />
    </HomeStack.Navigator>;
}

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
                <Tab.Screen name="Home" component={homeStack}/>
                <Tab.Screen name="Discover" component={discoverStack}/>
                <Tab.Screen name="Create" component={createStack}
                            options={{title: '', tabBarIcon: (props) => <CreateButton/>}}/>
                <Tab.Screen name="Inbox" component={inboxStack}/>
                <Tab.Screen name="Me" component={meStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>;
};


export default App;
