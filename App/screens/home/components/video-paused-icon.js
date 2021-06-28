import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleConstants from '../../../styles';

const VideoPausedIcon = ({playVideo}) => {
    return <View style={{zIndex: 10, alignSelf: 'center', justifyContent: 'flex-end', flex: 1}}>
        <TouchableWithoutFeedback onPress={() => playVideo()}>
            <MaterialCommunityIcons name={'play'}
                                    size={72}
                                    style={{opacity: 0.5}}
                                    color={StyleConstants.WHITE}/>
        </TouchableWithoutFeedback>
    </View>;
};

export default VideoPausedIcon;
