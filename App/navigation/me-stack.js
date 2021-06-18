import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MeScreenContainer from '../screens/me/me-screen-container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import SettingsScreenContainer from '../screens/settings/settings-screen-container';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
                    <TouchableOpacity onPress={() => props.navigation.navigate('SettingsScreen')}>
                        <MaterialCommunityIcons
                            name={'dots-vertical'}
                            size={24}
                            style={{marginRight: 16}}
                        />
                    </TouchableOpacity>
                ),
            }}
        />
        <meStack.Screen
            name="SettingsScreen"
            component={SettingsScreenContainer}
            options={{
                title: t('settingsAndPrivacy'),
            }}
        />
    </meStack.Navigator>;
};

export default MeStack;
