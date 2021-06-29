import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import BaseView from '../../components/base-view';
import StyleConstants from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DiscoverCarousel from './discover-carousel';
import DiscoverTopic from './discover-topic';


function DiscoverScreenView(props) {
    const [discoverList, setDiscoverList] = useState([{
        'name': 'koşarakuzaklaş',
        'type': 'hash',
        'count': '7.4M',
        'list-items': [
            require('../../assets/kosarakuzaklas1.jpeg'),
            require('../../assets/kosarakuzaklas2.jpeg'),
            require('../../assets/kosarakuzaklas3.jpeg'),
            require('../../assets/kosarakuzaklas4.jpeg'),
            require('../../assets/kosarakuzaklas5.jpeg'),
            require('../../assets/kosarakuzaklas6.jpeg'),
            require('../../assets/kosarakuzaklas7.jpeg')
        ],
    }, {
        'name': 'Savage - Megan Thee Stallion',
        'type': 'music',
        'count': '22.1M',
        'list-items': [
            require('../../assets/MeganTheeStallion1.jpeg'),
            require('../../assets/MeganTheeStallion2.jpeg'),
            require('../../assets/MeganTheeStallion3.jpeg'),
            require('../../assets/MeganTheeStallion4.jpeg'),
            require('../../assets/MeganTheeStallion5.jpeg'),
            require('../../assets/MeganTheeStallion6.jpeg'),
            require('../../assets/MeganTheeStallion7.jpeg'),
        ],
    }]);

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

    const renderDiscoverList = () => {
        return <View style={{paddingHorizontal: 8}}>
            {discoverList.map((item, index) => <DiscoverTopic item={item} index={index} t={props.t}/>)}
        </View>;
    };

    return <BaseView>
        {renderTopBar()}
        <ScrollView>
            <DiscoverCarousel/>
            {renderDiscoverList()}
        </ScrollView>
    </BaseView>;
}

export default DiscoverScreenView;
