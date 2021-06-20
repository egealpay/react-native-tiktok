import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {TouchableWithoutFeedback, View} from 'react-native';

const VideoPost = ({item, index, navigation}) => {
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        const blur = navigation.addListener('blur', () => {
            setIsPaused(true);
        });

        const focus = navigation.addListener('focus', () => {
            setIsPaused(false);
        });

        return blur, focus;
    }, [navigation]);

    return <TouchableWithoutFeedback key={index} onPress={() => setIsPaused(!isPaused)} style={{flex: 1}}>
        <Video source={item.video}
               paused={isPaused}
               style={{
                   flex: 1,
               }}
               repeat={false}
               resizeMode={'cover'}
        />
    </TouchableWithoutFeedback>;
};

export default VideoPost;
