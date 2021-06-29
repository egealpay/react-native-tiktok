import React, {useState, useEffect} from 'react';
import MeScreenView from './me-screen-view';
import {useTranslation} from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function MeScreenContainer(props) {

    const [user, setUser] = useState({
        userName: 'egealpay',
        profileImageUrl: 'https://avatars.githubusercontent.com/u/25003254?v=4',
        numFollowing: '29',
        numFollowers: '15',
        numLikes: '11',
        profileDetails: '',
        latestPosts: [],
    });

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: user.userName,
        });
    }, []);

    const {t, i18n} = useTranslation();

    return <MeScreenView t={t} user={user} isAccountOwner={true}/>;
}

export default MeScreenContainer;
