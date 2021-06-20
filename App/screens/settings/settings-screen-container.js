import React, {useState} from 'react';
import SettingsScreenView from './settings-screen-view';
import {useTranslation} from 'react-i18next';

function SettingsScreenContainer(props) {
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
    const {t, i18n} = useTranslation();

    const toggleSignUpModal = () => {
        setIsSignUpModalVisible(!isSignUpModalVisible);
    };

    return <SettingsScreenView t={t}
                               isSignUpModalVisible={isSignUpModalVisible}
                               navigation={props.navigation}
                               toggleSignUpModal={() => toggleSignUpModal()}
    />;
}

export default SettingsScreenContainer;
