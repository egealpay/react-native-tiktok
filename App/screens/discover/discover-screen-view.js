import React from 'react';
import {View, Text} from 'react-native';
import BaseView from '../../components/base-view';
import StyleConstants from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DiscoverCarousel from './discover-carousel';


function DiscoverScreenView(props) {

    const renderSearchBar = () => {
        return <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: StyleConstants.BRIGHT_GRAY,
            paddingVertical: 8,
            paddingLeft: 8,
            borderRadius: 4,
            marginRight: 8,
            alignItems: 'center',
        }}>
            <MaterialIcons name={'search'} size={24}/>
            <Text style={{marginLeft: 8, fontSize: 18, color: StyleConstants.SPANISH_GRAY}}>{props.t('search')}</Text>
        </View>;
    };

    const renderTopBar = () => {
        return <View style={{flexDirection: 'row', paddingHorizontal: 16, alignItems: 'center'}}>
            {renderSearchBar()}
            <MaterialCommunityIcons name={'scan-helper'} size={24}/>
        </View>;
    };

    return <BaseView>
        {renderTopBar()}
        <DiscoverCarousel/>
    </BaseView>;
}

export default DiscoverScreenView;
