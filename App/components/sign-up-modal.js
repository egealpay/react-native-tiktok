import Modal from 'react-native-modal';
import React from 'react';
import {View, Text} from 'react-native';
import StyleConstants from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function SignUpModal(props) {
    const renderHeader = () => {
        return <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons name={'close'} color={StyleConstants.SPANISH_GRAY} size={24}/>
            <MaterialCommunityIcons name={'help-circle-outline'} color={StyleConstants.SPANISH_GRAY} size={24}/>
        </View>;
    };

    return <Modal isVisible={props.isVisible}
                  style={{margin: 0}}
                  animationIn={'slideInUp'}
                  animationInTiming={500}
                  animationOutTiming={500}
                  onBackdropPress={() => props.onBackdropPress()}>
        <View style={{
            flex: 1,
            backgroundColor: StyleConstants.WHITE,
            marginTop: 96,
            padding: 16,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
        }}>
            {renderHeader()}
        </View>
    </Modal>;
}

export default SignUpModal;
