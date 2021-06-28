import React, {useEffect} from 'react';
import UserProfileScreenView from './user-profile-screen-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

function UserProfileScreenContainer(props) {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        let user = props.route.params.user;
        props.navigation.setOptions({
            headerTitle: user.userName,
            headerRight: () => (
                <MaterialCommunityIcons
                    name={'dots-vertical'}
                    size={24}
                    style={{marginRight: 16}}
                />
            ),
        });
    }, []);

    return <UserProfileScreenView user={props.route.params.user} t={t}/>;
}

export default UserProfileScreenContainer;
