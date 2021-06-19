import React, {useState} from 'react';
import {View, Text} from 'react-native';
import StyleConstants from '../styles';
import {useTranslation} from 'react-i18next';
import SignUpModal from './sign-up-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUpButton = props => {
    const {t, i18n} = useTranslation();
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

    return <View>
        <TouchableOpacity
            onPress={() => setIsSignUpModalVisible(true)}
            style={[{backgroundColor: StyleConstants.RED, paddingVertical: 8, paddingHorizontal: 96}, props.style]}>
            <Text style={{textAlign: 'center', color: StyleConstants.WHITE, fontWeight: 'bold'}}>{t('signUp')}</Text>
        </TouchableOpacity>
        <SignUpModal t={t} isVisible={isSignUpModalVisible} onBackdropPress={() => setIsSignUpModalVisible(false)}/>
    </View>;
};

export default SignUpButton;
