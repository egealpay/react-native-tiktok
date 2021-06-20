import React from 'react';
import {View, FlatList} from 'react-native';
import StyleConstants from '../../styles';
import VideoPost from './video-post';

const HomeScreenView = (props) => {

    const renderItem = ({item, index}) => (
        <VideoPost item={item} index={index} navigation={props.navigation}/>
    );

    return <View style={{flex: 1, backgroundColor: StyleConstants.WHITE}}>
        <FlatList
            style={{flex: 1}}
            data={props.posts}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
        />
    </View>;
};


export default HomeScreenView;
