import React from 'react';
import {View, FlatList} from 'react-native';
import StyleConstants from '../../styles';
import FollowNotification from './components/follow-notification';

const InboxScreenView = props => {

    return <View
        style={{flex: 1, backgroundColor: StyleConstants.WHITE}}>
        <FlatList
            data={props.data}
            renderItem={({item, index}) => <FollowNotification item={item} t={props.t}/>}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
        />
    </View>;
};

export default InboxScreenView;

