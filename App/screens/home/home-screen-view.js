import React from 'react';
import {View, FlatList} from 'react-native';
import VideoPost from './components/video-post';
import FeedPreference from './components/feed-preference';

const HomeScreenView = (props) => {

    return <View style={{flex: 1}}>
        <FeedPreference t={props.t}/>
        <FlatList
            data={props.posts}
            renderItem={({item, index}) => <VideoPost item={item} index={index} navigation={props.navigation}/>}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            pagingEnabled={true}
            bounces={false}
        />
    </View>;
};


export default HomeScreenView;
