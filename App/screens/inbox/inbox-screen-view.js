import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import EmptyScreen from '../../components/empty-screen';
import StyleConstants from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InboxScreenView = props =>
    <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: StyleConstants.WHITE}}>
        <EmptyScreen
            icon={<MaterialCommunityIcons name={'message-text-outline'} size={64} color={StyleConstants.SILVER_SAND}/>}
            text={'Messages and notifications will appear here'}/>
    </SafeAreaView>;

export default InboxScreenView;

