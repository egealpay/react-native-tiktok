import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenContainer from '../screens/home/home-screen-container';
import UserProfileScreenContainer from '../screens/user-profile/user-profile-screen-container';

const homeStack = createStackNavigator();

const HomeStack = props => {
    return <homeStack.Navigator>
        <homeStack.Screen
            name="Home"
            component={HomeScreenContainer}
            options={{headerShown: false}}
        />
        <homeStack.Screen
            name="UserProfile"
            component={UserProfileScreenContainer}
        />
    </homeStack.Navigator>;
};

export default HomeStack;
