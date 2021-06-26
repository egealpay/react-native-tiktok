import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {TouchableWithoutFeedback, View, Dimensions} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import SideBar from './side-bar';

const VideoPost = ({item, index, navigation}) => {
    const [isPaused, setIsPaused] = useState(true);

    return <View style={{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        height: Dimensions.get('window').height - useBottomTabBarHeight(),
    }}>
        <SideBar
            navigation={navigation}
            item={item}/>
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
