import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InboxScreenContainer from '../screens/inbox/inbox-screen-container';

const inboxStack = createStackNavigator();

const InboxStack = props => {
    return <inboxStack.Navigator>
        <inboxStack.Screen
            name="InboxStack"
            component={InboxScreenContainer}
            options={{title: 'All Activity'}}
        />
    </inboxStack.Navigator>;
}

export default InboxStack;
