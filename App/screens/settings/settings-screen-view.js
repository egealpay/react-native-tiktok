import React from 'react';
import {SectionList, Text, View} from 'react-native';
import SingleRow from './single-row';
import StyleConstants from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    {
        title: 'cacheAndCellularData',
        data: [{
            title: 'freeUpSpace',
            icon: <MaterialCommunityIcons name={'trash-can-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'dataSaver',
            icon: <MaterialIcons name={'data-usage'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }],
    },
    {
        title: 'support',
        data: [{
            title: 'reportProblem',
            icon: <AntDesign name={'edit'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'helpCenter',
            icon: <MaterialCommunityIcons name={'help-circle-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'safetyCenter',
            icon: <MaterialCommunityIcons name={'shield-star-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'creatorPortal',
            icon: <MaterialCommunityIcons name={'account-star-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }],
    }, {
        title: 'about',
        data: [{
            title: 'communityGuidelines',
            icon: <MaterialCommunityIcons name={'google-circles-communities'} size={18}
                                          color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'termsOfService',
            icon: <MaterialCommunityIcons name={'book-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'privacyPolicy',
            icon: <Ionicons name={'md-document-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
        }, {
            title: 'copyrightPolicy',
            icon: <MaterialCommunityIcons name={'copyright'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
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
                <Text
                    style={{paddingLeft: 16, color: StyleConstants.SPANISH_GRAY, marginTop: 8}}>{props.t(title)}</Text>
            )}
        />
    </View>;
};

export default SettingsScreenView;
