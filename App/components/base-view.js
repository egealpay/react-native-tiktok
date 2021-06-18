import React from 'react';
import StyleConstants from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const BaseView = props => {

    return <SafeAreaView
        style={[props.style, {flex: 1, backgroundColor: StyleConstants.WHITE}]}>
        {props.children}
    </SafeAreaView>;
};

export default BaseView;
