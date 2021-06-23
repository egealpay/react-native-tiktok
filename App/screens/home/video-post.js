import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {TouchableWithoutFeedback, View, Dimensions} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleConstants from '../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SideBar from './side-bar';

const VideoPost = ({item, index, navigation}) => {
    const [isPaused, setIsPaused] = useState(true);

    /*useEffect(() => {
        const blur = navigation.addListener('blur', () => {
            setIsPaused(true);
        });

        const focus = navigation.addListener('focus', () => {
            setIsPaused(false);
        });

        return blur, focus;
    }, [navigation]);*/

    return <View style={{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        height: Dimensions.get('window').height - useBottomTabBarHeight(),
    }}>
        <SideBar profileImageUrl={item.profileImageUrl} numOfLikes={item.numOfLikes} numOfComments={item.numOfComments} numOfShare={item.numOfShare}/>
        <TouchableWithoutFeedback onPress={() => setIsPaused(!isPaused)}>
            <Video source={require('../../assets/ssstiktok_1624187822.mp4')}
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
