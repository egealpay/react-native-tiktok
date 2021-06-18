import React from 'react';
import {SectionList, Text, View} from 'react-native';
import SingleRow from './single-row';
import StyleConstants from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
    {
        title: 'account',
        data: [{
            title: 'myAccount',
            icon: <Ionicons name={'person-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'privacy',
            icon: <MaterialIcons name={'lock-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }],
    },
    {
        title: 'contentAndActivity',
        data: [{
            title: 'appLanguage',
            icon: <MaterialIcons name={'language'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'contentPreferences',
            icon: <MaterialCommunityIcons name={'video-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }],
    },
];

const SettingsScreenView = props => {
    return <View style={{flex: 1, backgroundColor: StyleConstants.WHITE}}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item, index, section}) => <SingleRow item={item}
                                                               index={index}
                                                               section={section}
                                                               t={props.t}/>}
            renderSectionHeader={({section: {title}}) => (
                <Text style={{paddingLeft: 16, color: StyleConstants.SPANISH_GRAY, marginTop: 8}}>{props.t(title)}</Text>
            )}
        />
    </View>;
};

export default SettingsScreenView;
