import React from 'react';
import {View, Text} from 'react-native';
import StyleConstants from '../styles';
import Button from './button';

const EmptyScreen = props => {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {props.icon}
        <Text style={{color: StyleConstants.SPANISH_GRAY, marginTop: 16}}>{props.text}</Text>
        <View style={{marginTop: 16}}>
            <Button text={'signUp'} style={{paddingHorizontal: 96}}/>
        </View>
    </View>;
};

export default EmptyScreen;
