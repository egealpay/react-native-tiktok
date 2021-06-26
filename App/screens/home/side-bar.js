import React from 'react';
import StyleConstants from '../../styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SideBar(props) {

    const ICON_SIZE = 36;
    const ICON_COLOR = StyleConstants.WHITE;

    const renderIconAndText = (iconName, text) => {
        return <TouchableOpacity style={{marginBottom: 24}}>
            <Fontisto name={iconName} size={ICON_SIZE} color={ICON_COLOR}/>
            <Text style={{marginTop: 8, textAlign: 'center', color: ICON_COLOR, fontSize: 14}}>{text}</Text>
        </TouchableOpacity>;
    };

    const renderProfileImage = (profileImageUrl) => {
        return <TouchableOpacity
            onPress={() => props.navigation.navigate('UserProfile', {
                user: props.item.user,
            })}
            style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                marginBottom: 24,
                backgroundColor: StyleConstants.WHITE,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                style={{width: 46, height: 46, borderRadius: 23}}
                resizeMode={'cover'}
                source={{
                    uri: profileImageUrl,
                }}
            />
        </TouchableOpacity>;
    };

    return <View style={{zIndex: 10, paddingRight: 8, marginBottom: 16, alignItems: 'center'}}>
        {renderProfileImage(props.item.user.profileImageUrl)}
        {renderIconAndText('heart', props.item.numOfLikes)}
        {renderIconAndText('commenting', props.item.numOfComments)}
        {renderIconAndText('share-a', props.item.numOfShare)}
    </View>;
}

export default SideBar;
