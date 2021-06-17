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

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
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
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name="Discover" component={DiscoverStack}/>
        <Tab.Screen name="Create" component={CreateStack}
                    options={{title: '', tabBarIcon: (props) => <CreateButton/>}}/>
        <Tab.Screen name="Inbox" component={InboxStack}/>
        <Tab.Screen name="Me" component={MeStack}/>
    </Tab.Navigator>;
};

export default TabNavigator;
