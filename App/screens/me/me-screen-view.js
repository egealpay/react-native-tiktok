import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import EmptyScreen from '../../components/empty-screen';
import StyleConstants from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MeScreenView = props =>
    <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: StyleConstants.WHITE}}>
        <EmptyScreen icon={<Ionicons name={'person-outline'} size={64} color={StyleConstants.SILVER_SAND}/>}
                     text={'Sign up for an account'}/>
    </SafeAreaView>;

export default MeScreenView;
