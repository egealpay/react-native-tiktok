import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MeScreenContainer from '../screens/me/me-screen-container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const meStack = createStackNavigator();

const MeStack = props => {
    return <meStack.Navigator>
        <meStack.Screen
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
    </meStack.Navigator>;
};

export default MeStack;
