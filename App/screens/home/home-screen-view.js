import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import VideoPost from './components/video-post';
import StyleConstants from '../../styles';

const HomeScreenView = (props) => {

    return <View style={{flex: 1}}>
        <View style={{
            position: 'absolute',
            left: Dimensions.get('window').width / 3,
            width: '40%',
            flexDirection: 'row',
            top: 48,
            zIndex: 10,
        }}>
            <Text
                style={{fontSize: 16, color: StyleConstants.WHITE, opacity: 0.7, textAlign: 'center'}}>Following</Text>
            <View style={{
                marginHorizontal: 8,
                height: 12,
                width: 1,
                backgroundColor: StyleConstants.SPANISH_GRAY,
                alignSelf: 'center',
            }}/>
            <Text style={{fontSize: 16, color: StyleConstants.WHITE, fontWeight: '700', textAlign: 'center'}}>For
                You</Text>
        </View>
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
