import React from 'react';
import {View, Text} from 'react-native';
import StyleConstants from '../styles';
import {useTranslation} from 'react-i18next';

const SignUpButton = props => {
    const {t, i18n} = useTranslation();

    return <View style={{backgroundColor: StyleConstants.RED, paddingVertical: 8, paddingHorizontal: 96}}>
        <Text style={{textAlign: 'center', color: StyleConstants.WHITE, fontWeight: 'bold'}}>{t('signUp')}</Text>
    </View>;
};

export default SignUpButton;
