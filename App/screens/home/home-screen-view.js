import React from 'react';
import {View, FlatList, TouchableWithoutFeedback} from 'react-native';
import StyleConstants from '../../styles';
import VideoPost from './video-post';
import Video from 'react-native-video';

const HomeScreenView = (props) => {

    return <View>
        <FlatList
            data={props.posts}
            renderItem={({item, index}) => <VideoPost item={item} index={index} navigation={props.navigation}/>}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
        />
    </View>;
};


export default HomeScreenView;
