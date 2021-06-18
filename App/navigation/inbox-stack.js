import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InboxScreenContainer from '../screens/inbox/inbox-screen-container';
import {useTranslation} from 'react-i18next';

const inboxStack = createStackNavigator();

const InboxStack = props => {
    const {t, i18n} = useTranslation();

    return <inboxStack.Navigator>
        <inboxStack.Screen
            name="InboxStack"
            component={InboxScreenContainer}
            options={{title: t('allActivity')}}
        />
    </inboxStack.Navigator>;
}

export default InboxStack;
