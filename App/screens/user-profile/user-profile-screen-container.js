import React, {useEffect} from 'react';
import UserProfileScreenView from './user-profile-screen-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function UserProfileScreenContainer(props) {

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

    return <UserProfileScreenView user={props.route.params.user}/>;
}

export default UserProfileScreenContainer;
