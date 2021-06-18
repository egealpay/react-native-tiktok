import React from 'react';
import MeScreenView from './me-screen-view';
import {useTranslation} from 'react-i18next';

function MeScreenContainer(props) {
    const {t, i18n} = useTranslation();

    return <MeScreenView t={t}/>;
}

export default MeScreenContainer;
