import React from "react";
import StyleConstants from '../styles';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CreateButton(props) {
    return <View style={{
        position: 'absolute',
        backgroundColor: StyleConstants.RED,
        paddingRight: 4,
        borderRadius: 8,
        top: 16,
    }}>
        <View style={{
            backgroundColor: StyleConstants.SEA_SERPENT,
            paddingLeft: 4,
            borderRadius: 8,
        }}>
            <View style={{
                backgroundColor: StyleConstants.BLACK,
                paddingHorizontal: 6,
                borderRadius: 8,
            }}>
                <MaterialCommunityIcons name={'plus'} size={25} color={StyleConstants.WHITE}/>
            </View>
        </View>
    </View>
}

export default CreateButton
