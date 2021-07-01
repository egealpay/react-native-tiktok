import React from 'react';
import {Image, Text, View} from 'react-native';
import StyleConstants from '../../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/button';

const FollowNotification = ({item, t}) => {
    return <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 8}}>
        <View>
            <Image
                style={{width: 50, height: 50, borderRadius: 25}}
                resizeMode={'cover'}
                source={{
                    uri: item.user.profileImageUrl,
                }}
            />
        </View>
        <View style={{marginLeft: 12, flex: 1}}>
            <Text style={{fontWeight: '500'}}>
                {item.user.userName}
            </Text>
            <Text style={{marginTop: 4, color: StyleConstants.SPANISH_GRAY}}>
                {t('startedFollowingYou')}
            </Text>
        </View>
        <Button text={'follow'} style={{paddingHorizontal: 32}}/>
    </View>;
};

export default FollowNotification;
