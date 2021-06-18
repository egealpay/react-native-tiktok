import React from 'react';
import SettingsScreenView from './settings-screen-view';
import {useTranslation} from 'react-i18next';

function SettingsScreenContainer(props) {
    const {t, i18n} = useTranslation();

    return <SettingsScreenView t={t}/>;
}

export default SettingsScreenContainer;
