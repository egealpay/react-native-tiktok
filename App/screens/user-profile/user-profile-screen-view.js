import React from 'react';
import {Image, View, Text} from 'react-native';
import StyleConstants from '../../styles';


const UserProfileScreenView = props => {

    const renderTextsAsColumn = (textBig, textSmall) => {
        return <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '700', marginBottom: 8}}>{textBig}</Text>
            <Text style={{color: StyleConstants.SPANISH_GRAY, fontSize: 12}}>{textSmall}</Text>
        </View>;
    };

    const renderFollowerCount = () => {
        return <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderTextsAsColumn(props.user.numFollowing, 'Following')}
            <View style={{height: 24, width: 1, backgroundColor: StyleConstants.BRIGHT_GRAY, marginHorizontal: 16}}/>
            {renderTextsAsColumn(props.user.numFollowers, 'Followers')}
            <View style={{height: 24, width: 1, backgroundColor: StyleConstants.BRIGHT_GRAY, marginHorizontal: 16}}/>
            {renderTextsAsColumn(props.user.numLikes, 'Likes')}
        </View>;
    };

    const renderBasicInformation = () => {
        return <View style={{marginTop: 16}}>
            {renderFollowerCount()}
        </View>;
    };

    const renderProfileImage = () => {
        return <View
            style={{
                marginTop: 24,
                backgroundColor: StyleConstants.WHITE,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                style={{width: 96, height: 96, borderRadius: 48}}
                resizeMode={'cover'}
                source={{
                    uri: props.user.profileImageUrl,
                }}
            />
            <Text style={{marginTop: 24, fontWeight: '500', fontSize: 16}}>
                @{props.user.userName}
            </Text>
        </View>;
    };

    return <View style={{flex: 1, backgroundColor: StyleConstants.WHITE, alignItems: 'center'}}>
        {renderProfileImage()}
        {renderBasicInformation()}
    </View>;
};

export default UserProfileScreenView;
