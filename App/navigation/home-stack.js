import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenContainer from '../screens/home/home-screen-container';

const homeStack = createStackNavigator();

const HomeStack = props => {
    return <homeStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <homeStack.Screen
            name="HomeStack"
            component={HomeScreenContainer}
        />
    </homeStack.Navigator>;
};

export default HomeStack;
