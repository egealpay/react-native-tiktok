import React from 'react';
import DiscoverScreenView from './discover-screen-view';
import {useTranslation} from 'react-i18next';

function DiscoverScreenContainer(props) {
    const {t, i18n} = useTranslation();

    return <DiscoverScreenView t={t}/>;
}

export default DiscoverScreenContainer;
