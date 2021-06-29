import React from 'react';
import {Text, View} from 'react-native';
import StyleConstants from '../../../styles';

const PostDetails = (props) => {
    return <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        paddingLeft: 16,
        paddingBottom: 16,
    }}>
        <View style={{flexDirection: 'row', marginBottom: 4}}>
            <Text style={{color: StyleConstants.WHITE, fontWeight: '500'}}>@{props.post.user.userName}</Text>
            <View style={{
                height: 4,
                width: 4,
                backgroundColor: StyleConstants.SPANISH_GRAY,
                borderRadius: 2,
                alignSelf: 'center',
                marginHorizontal: 4,
            }}/>
            <Text style={{
                color: StyleConstants.SPANISH_GRAY,
                fontWeight: '500',
            }}>{props.post.dateOfPost}</Text>
        </View>
        {props.post.postDetails && <Text style={{color: StyleConstants.WHITE}}>{props.post.postDetails}</Text>}
    </View>;
};

export default PostDetails;
