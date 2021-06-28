import React from 'react';
import {View, FlatList} from 'react-native';
import VideoPost from './components/video-post';

const HomeScreenView = (props) => {

    return <View>
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
