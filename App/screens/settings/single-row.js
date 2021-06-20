import React from 'react';
import {View, Text} from 'react-native';
import StyleConstants from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SingleRow = props => {

    const isLastElementInSection = () => {
        return props.index === props.section.data.length - 1;
    };

    return <TouchableOpacity onPress={() => props.item.onPress && props.item.onPress()}>
        <View style={{flexDirection: 'row', paddingLeft: 16, marginVertical: 16, alignItems: 'center'}}>
            {props.item.icon}
            <Text style={{marginLeft: 8}}>{props.t(props.item.title)}</Text>
            <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 16}}>
                {props.item.rightIcon}
            </View>
        </View>
        {isLastElementInSection() &&
        <View style={{
            height: 1,
            marginHorizontal: 16,
            backgroundColor: StyleConstants.SILVER_SAND,
            marginBottom: 8,
            flexDirection: 'row',
            flex: 1,
        }}/>}
    </TouchableOpacity>;
};

export default SingleRow;
