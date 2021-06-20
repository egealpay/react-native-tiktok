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
        'name': 'babamla',
        'type': 'hash',
        'count': '62.7M',
        'list-items': [
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
        ],
    }, {
        'name': 'Bad Habits',
        'type': 'music',
        'count': '85.4K',
        'list-items': [
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
        ],
    }, {
        'name': 'ASMR',
        'type': 'hash',
        'count': '127.0B',
        'list-items': [
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
            'https://www.tiktok.com/api/img/?itemId=6965122051178892549&location=1&aid=1988',
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
