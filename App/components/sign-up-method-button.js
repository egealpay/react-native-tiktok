import React from 'react';
import {View, Text} from 'react-native';
import StyleConstants from '../styles';

const SignUpMethodButton = ({item, index, t}) => {
    return <View key={index}
                 style={{
                     flexDirection: 'row',
                     alignItems: 'center',
                     paddingLeft: 8,
                     borderWidth: 1,
                     paddingVertical: 16,
                     marginVertical: 8,
                     borderColor: StyleConstants.BRIGHT_GRAY,
                 }}>
        {item.icon}
        <Text style={{flex: 1, textAlign: 'center', fontWeight: '500'}}>{t(item.title)}</Text>
    </View>;
};

export default SignUpMethodButton;
