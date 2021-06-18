import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyleConstants from '../styles';
import HomeStack from './home-stack';
import DiscoverStack from './discover-stack';
import CreateStack from './create-stack';
import CreateButton from '../components/create-button';
import InboxStack from './inbox-stack';
import MeStack from './me-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
    const {t, i18n} = useTranslation();

    // NOT RECOMMENDED METHOD !
    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';

        if (routeName === 'SettingsScreen') {
            return false;
        }

        return true;
    };

    return <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Discover') {
                    iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Inbox') {
                    iconName = focused ? 'message-text' : 'message-text-outline';
                    return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
                } else if (route.name === 'Me') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color}/>;
            },
        })}
        tabBarOptions={{
            activeTintColor: StyleConstants.BLACK,
            inactiveTintColor: StyleConstants.SPANISH_GRAY,
            style: {backgroundColor: StyleConstants.WHITE, borderTopWidth: 0},
        }}>
        <Tab.Screen name={t('home')} component={HomeStack}/>
        <Tab.Screen name={t('discover')} component={DiscoverStack}/>
        <Tab.Screen name={t('create')} component={CreateStack}
                    options={{title: '', tabBarIcon: (props) => <CreateButton/>}}/>
        <Tab.Screen name={t('inbox')} component={InboxStack}/>
        <Tab.Screen name={t('me')} component={MeStack} options={({route}) => ({
            tabBarVisible: getTabBarVisibility(route),
        })}/>
    </Tab.Navigator>;
};

export default TabNavigator;
