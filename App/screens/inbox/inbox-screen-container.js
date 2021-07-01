import React from 'react';
import InboxScreenView from './inbox-screen-view';
import {useTranslation} from 'react-i18next';

function InboxScreenContainer(props) {
    const {t, i18n} = useTranslation();

    const data = [{
        'type': 'follow',
        'user': {
            userName: 'charlidamelio',
            profileImageUrl: 'https://i.pinimg.com/originals/b0/d2/c9/b0d2c95644f49051099ca2704ad66b4f.jpg',
        },
    }, {
        'type': 'follow',
        'user': {
            userName: 'addisonre',
            profileImageUrl: 'https://cdn.vox-cdn.com/thumbor/l3Jo67H4fAYZVj6dLk0IpnavzsM=/0x0:2938x3600/1200x800/filters:focal(1095x733:1565x1203)/cdn.vox-cdn.com/uploads/chorus_image/image/67392918/1208515622.jpg.0.jpg',
        },
    }];


    return <InboxScreenView t={t} data={data}/>;
}

export default InboxScreenContainer;
