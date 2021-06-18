import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MeScreenContainer from '../screens/me/me-screen-container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

const meStack = createStackNavigator();

const MeStack = props => {
    const {t, i18n} = useTranslation();

    return <meStack.Navigator>
        <meStack.Screen
            name="MeStack"
            component={MeScreenContainer}
            options={{
                title: t('profile'),
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
