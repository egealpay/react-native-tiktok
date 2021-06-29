import React from 'react';
import UserProfileScreenView from '../user-profile/user-profile-screen-view';

const MeScreenView = props =>
    <UserProfileScreenView t={props.t} user={props.user} isAccountOwner={props.isAccountOwner}/>;

export default MeScreenView;
