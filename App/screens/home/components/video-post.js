import React, {useState} from 'react';
import Video from 'react-native-video';
import {TouchableWithoutFeedback, View, Dimensions} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import SideBar from './side-bar';
import VideoPausedIcon from './video-paused-icon';
import PostDetails from './post-details';

const VideoPost = ({item, navigation}) => {
    const [isPaused, setIsPaused] = useState(true);

    return <View style={{
        width: '100%',
        height: Dimensions.get('window').height - useBottomTabBarHeight(),
    }}>
        {isPaused && <VideoPausedIcon playVideo={() => setIsPaused(false)}/>}
        <SideBar
            stopVideo={() => setIsPaused(true)}
            navigation={navigation}
            item={item}/>
        <PostDetails post={item}/>
        <TouchableWithoutFeedback onPress={() => setIsPaused(!isPaused)}>
            <Video source={item.video}
                   paused={isPaused}
                   style={{
                       position: 'absolute',
                       top: 0,
                       left: 0,
                       bottom: 0,
                       right: 0,
                   }}
                   repeat={true}
                   resizeMode={'cover'}
            />
        </TouchableWithoutFeedback>
    </View>;
};

export default VideoPost;
