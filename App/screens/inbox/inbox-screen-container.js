import React from 'react';
import InboxScreenView from './inbox-screen-view';
import {useTranslation} from 'react-i18next';

function InboxScreenContainer(props) {
    const {t, i18n} = useTranslation();

    return <InboxScreenView t={t}/>;
}

export default InboxScreenContainer;
