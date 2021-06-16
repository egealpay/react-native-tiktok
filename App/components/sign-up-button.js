import React from 'react';
import {View, Text} from 'react-native';
import StyleConstants from '../styles';

const SignUpButton = props => {
    return <View style={{backgroundColor: StyleConstants.RED, paddingVertical: 8, paddingHorizontal: 96}}>
        <Text style={{textAlign: 'center', color: StyleConstants.WHITE, fontWeight: 'bold'}}>Sign up</Text>
    </View>;
};

export default SignUpButton;
