import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleConstants from '../styles';
import SignUpButton from './sign-up-button';

const EmptyScreen = props => {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {props.icon}
        <Text style={{color: StyleConstants.SPANISH_GRAY, marginTop: 16}}>{props.text}</Text>
        <View style={{marginTop: 16}}>
            <SignUpButton/>
        </View>
    </View>;
};

export default EmptyScreen;
