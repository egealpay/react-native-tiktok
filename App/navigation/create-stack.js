import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateScreenContainer from '../screens/create/create-screen-container';

const createStack = createStackNavigator();

const CreateStack = props => {
    return <createStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <createStack.Screen
            name="CreateStack"
            component={CreateScreenContainer}
        />
    </createStack.Navigator>;
}

export default CreateStack;
