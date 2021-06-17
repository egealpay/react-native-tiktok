import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenContainer from '../screens/home/home-screen-container';

const createStack = createStackNavigator();

const CreateStack = props => {
    return <createStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <createStack.Screen
            name="CreateStack"
            component={HomeScreenContainer}
        />
    </createStack.Navigator>;
}

export default CreateStack;
