import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import EmptyScreen from '../../components/empty-screen';
import StyleConstants from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BaseView from '../../components/base-view';

const MeScreenView = props =>
    <BaseView
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <EmptyScreen icon={<Ionicons name={'person-outline'}
                                     size={64}
                                     color={StyleConstants.SILVER_SAND}/>}
                     text={props.t('signUpForAccount')}/>
    </BaseView>;

export default MeScreenView;
