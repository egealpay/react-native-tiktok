import React from 'react';
import EmptyScreen from '../../components/empty-screen';
import StyleConstants from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseView from '../../components/base-view';

const InboxScreenView = props =>
    <BaseView
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <EmptyScreen
            icon={<MaterialCommunityIcons name={'message-text-outline'} size={64} color={StyleConstants.SILVER_SAND}/>}
            text={props.t('inboxScreenNotSignedInMessage')}/>
    </BaseView>;

export default InboxScreenView;

