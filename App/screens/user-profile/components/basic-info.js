import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StyleConstants from '../../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BasicInfo = props => {

    const renderDetails = () => {
        return <View style={{marginTop: 16}}>
            <Text style={{textAlign: 'center'}}>{props.user.profileDetails}</Text>
        </View>;
    };

    const renderAccountOwnerButtons = () => {
        return <View style={{flexDirection: 'row', marginTop: 16}}>
            <TouchableOpacity style={{borderRadius: 4, borderWidth: 1, borderColor: StyleConstants.SILVER_SAND}}>
                <Text style={{
                    fontSize: StyleConstants.fontSizeM,
                    color: StyleConstants.BLACK,
                    paddingHorizontal: 48,
                    paddingVertical: 16,
                    fontWeight: '700',
                }}>{props.t('editProfile')}</Text>
            </TouchableOpacity>
            <View style={styles.smallButtonContainer}>
                <Ionicons name={'bookmark-outline'} size={18}/>
            </View>
        </View>
    }

    const renderButtons = () => {
        if (props.isAccountOwner)
            return renderAccountOwnerButtons();

        return <View style={{flexDirection: 'row', marginTop: 16}}>
            <TouchableOpacity style={{backgroundColor: StyleConstants.RED}}>
                <Text style={{
                    fontSize: StyleConstants.fontSizeM,
                    color: StyleConstants.WHITE,
                    paddingHorizontal: 48,
                    paddingVertical: 16,
                    fontWeight: '700',
                }}>{props.t('follow')}</Text>
            </TouchableOpacity>
            <View style={styles.smallButtonContainer}>
                <MaterialCommunityIcons name={'instagram'} size={24}/>
            </View>
            <View style={styles.smallButtonContainer}>
                <Ionicons name={'caret-down-outline'} size={18}/>
            </View>
        </View>;
    };

    const renderTextsAsColumn = (textBig, textSmall) => {
        return <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{
                fontSize: StyleConstants.fontSizeL,
                textAlign: 'center',
                fontWeight: '700',
                marginBottom: 8,
            }}>{textBig}</Text>
            <Text style={{
                color: StyleConstants.SPANISH_GRAY,
                textAlign: 'center',
                fontSize: StyleConstants.fontSizeXS,
            }}>{textSmall}</Text>
        </View>;
    };

    const renderVerticalDivider = () => <View
        style={{height: 24, width: 1, backgroundColor: StyleConstants.BRIGHT_GRAY, marginHorizontal: 16}}/>;

    const renderFollowerCount = () => {
        return <View style={{marginTop: 16, flexDirection: 'row', justifyContent: 'center'}}>
            {renderTextsAsColumn(props.user.numFollowing, props.t('following'))}
            {renderVerticalDivider()}
            {renderTextsAsColumn(props.user.numFollowers, props.t('Followers'))}
            {renderVerticalDivider()}
            {renderTextsAsColumn(props.user.numLikes, props.t('Likes'))}
        </View>;
    };

    const renderProfileImage = () => {
        return <View
            style={{
                marginTop: 24,
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
            <Text style={{marginTop: 24, fontWeight: '500', fontSize: StyleConstants.fontSizeM}}>
                @{props.user.userName}
            </Text>
        </View>;
    };

    return <View>
        {renderProfileImage()}
        {renderFollowerCount()}
        {renderButtons()}
        {renderDetails()}
    </View>;
};

const styles = StyleSheet.create({
    smallButtonContainer: {
        marginLeft: 8,
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 12,
        borderColor: StyleConstants.SILVER_SAND,
    },
});

export default BasicInfo;
