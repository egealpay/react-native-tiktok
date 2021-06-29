import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import StyleConstants from '../../../styles';

const FeedPreference = (props) => {
    return <View style={{
        position: 'absolute',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        top: 48,
        zIndex: 10,
    }}>
        <Text
            style={{
                fontSize: StyleConstants.fontSizeM,
                color: StyleConstants.WHITE,
                opacity: 0.7,
                textAlign: 'center',
            }}>{props.t('following')}</Text>
        <View style={{
            marginHorizontal: 8,
            height: 12,
            width: 1,
            backgroundColor: StyleConstants.SPANISH_GRAY,
            alignSelf: 'center',
        }}/>
        <Text style={{
            fontSize: StyleConstants.fontSizeM,
            color: StyleConstants.WHITE,
            fontWeight: '700',
            textAlign: 'center',
        }}>{props.t('forYou')}</Text>
    </View>;
};

export default FeedPreference;
