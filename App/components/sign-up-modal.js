import Modal from 'react-native-modal';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StyleConstants from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignUpMethodButton from './sign-up-method-button';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DATA = [{
    title: 'usePhoneOrEmail',
    icon: <Ionicons name={'person-outline'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
}, {
    title: 'useFacebook',
    icon: <MaterialCommunityIcons name={'facebook'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
}, {
    title: 'useGoogle',
    icon: <FontAwesome name={'google'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
}, {
    title: 'useTwitter',
    icon: <MaterialCommunityIcons name={'twitter'} size={18} color={StyleConstants.SPANISH_GRAY}/>,
}];

function SignUpModal(props) {
    const renderHeader = () => {
        return <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => props.onCrossPressed()}>
                <MaterialCommunityIcons name={'close'} color={StyleConstants.SPANISH_GRAY} size={24}/>
            </TouchableOpacity>
            <MaterialCommunityIcons name={'help-circle-outline'} color={StyleConstants.SPANISH_GRAY} size={24}/>
        </View>;
    };

    const renderText = () => {
        return <View style={{alignItems: 'center', paddingHorizontal: 8, marginTop: 32}}>
            <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>{props.t('signUpForTiktok')}</Text>
            <Text style={{
                textAlign: 'center',
                marginTop: 16,
                color: StyleConstants.SPANISH_GRAY,
            }}>{props.t('signUpSubText')}</Text>
        </View>;
    };

    const renderSignUpMethodButtons = () => {
        return <View style={{paddingTop: 24, paddingHorizontal: 8, flex: 1}}>
            {DATA.map((item, index) => <SignUpMethodButton item={item} index={index} t={props.t}/>)}
        </View>;
    };

    const renderSignUpTermsText = () => {
        return <View style={{
            paddingHorizontal: 8,
            marginBottom: 16,
        }}>
            <Text style={{
                fontSize: 12,
                textAlign: 'center',
                color: StyleConstants.SPANISH_GRAY,
            }}>{props.t('signUpTermsAndPrivacy')}</Text>
        </View>;
    };

    const renderBottom = () => {
        return <View style={styles.bottomStyle}>
            <Text>{props.t('alreadyHaveAccount')} </Text>
            <TouchableOpacity>
                <Text style={{color: StyleConstants.RED, fontWeight: '600'}}>{props.t('logIn')}</Text>
            </TouchableOpacity>
        </View>;
    };

    return <Modal isVisible={props.isVisible}
                  style={{margin: 0}}
                  animationIn={'slideInUp'}
                  animationInTiming={500}
                  animationOutTiming={500}
                  onBackdropPress={() => props.onBackdropPress()}>
        <View style={styles.modalBackground}>
            {renderHeader()}
            {renderText()}
            {renderSignUpMethodButtons()}
            {renderSignUpTermsText()}
            {renderBottom()}
        </View>
    </Modal>;
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: StyleConstants.WHITE,
        marginTop: 96,
        padding: 16,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    bottomStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConstants.BRIGHT_GRAY,
        paddingVertical: 16,
        marginHorizontal: -16,
    },
});

export default SignUpModal;
