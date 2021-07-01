import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DiscoverScreenContainer from '../screens/discover/discover-screen-container';

const discoverStack = createStackNavigator();

const DiscoverStack = props => {
    return <discoverStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <discoverStack.Screen
            name="DiscoverStack"
            component={DiscoverScreenContainer}
        />
    </discoverStack.Navigator>;
};

export default DiscoverStack;
