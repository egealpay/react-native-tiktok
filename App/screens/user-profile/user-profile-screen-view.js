import React from 'react';
import {Image, View, Text, ScrollView, Dimensions} from 'react-native';
import StyleConstants from '../../styles';
import Tabs from './components/tabs';
import BasicInfo from './components/basic-info';


const UserProfileScreenView = props => {

    return <ScrollView style={{backgroundColor: StyleConstants.WHITE}}>
        <View style={{flex: 1, backgroundColor: StyleConstants.WHITE, alignItems: 'center'}}>
            <BasicInfo user={props.user} t={props.t} isAccountOwner={props.isAccountOwner}/>
            <Tabs latestPosts={props.user.latestPosts} userName={props.user.userName} isAccountOwner={props.isAccountOwner}/>
        </View>
    </ScrollView>;
};

export default UserProfileScreenView;
