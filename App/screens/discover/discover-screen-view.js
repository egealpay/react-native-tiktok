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
            'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/2f8c61e789e94ecf8fd2ee15f06078b6_1623440870?x-expires=1624626000&x-signature=4MVLsuZC8X%2FbOtdI6u0TpO2bQtE%3D',
            'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/b2f3df5d2a4e4594970ce38f13b6da55?x-expires=1624626000&x-signature=2krWdoixCudwrzTT3zdbAO4gYWs%3D',
            'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/ebfccf9abd214572aa4cdfa8c19c9ed3?x-expires=1624626000&x-signature=tggXkp5RXiQfpBibxWlOWmnr63g%3D',
            'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/28340138ec8b41409884d7a39c328b8d?x-expires=1624626000&x-signature=tkybAeopV5kJa8mLE0XX5m9oJ84%3D',
            'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/8bb04969413b4be483039bb00e18741c?x-expires=1624626000&x-signature=puC7O0gBWUXulQtLLMeg7HTr15M%3D',
            'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/af65891168ae4acfabbd580f49742103?x-expires=1624626000&x-signature=zQ8ozbkxIcaeLieTzFpB7QJcKzU%3D',
            'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/31fe85e045f04943b69a9bcd71507346?x-expires=1624626000&x-signature=EJIOJ9W9i%2BvgGMnKqyp84ModNBc%3D',
        ],
    }, {
        'name': 'Savage - Megan Thee Stallion',
        'type': 'music',
        'count': '22.1M',
        'list-items': [
            'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5b67919b97914f4586acf03144ae04b8_1583882317?x-expires=1624626000&x-signature=P4riMjfmSbNVNCHW8Xw8NhvBhCI%3D',
            'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d0f12d3f60c44ab5b0b4891faf746d06?x-expires=1624626000&x-signature=J1mHUndSPYfZu7HvkOHtlAvMAtg%3D',
            'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e66fd663dbe244888f171d256874b506_1585260970?x-expires=1624626000&x-signature=QnJbuT1dfXEaUAbTWWNU9DCWBxA%3D',
            'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/fd4b4f3af9384f92a252524979362655_1584470215?x-expires=1624626000&x-signature=9VjpwTH25niXOnUbt%2F4Vj8VDCJk%3D',
            'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9aa4b9f760844228a1b8bda9eb59a3f4_1585176905?x-expires=1624626000&x-signature=hrn7WJv0LxF1If26paDbSD1psWA%3D',
            'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/700c172b78d84f34b5509323e1933e5e_1584479327?x-expires=1624626000&x-signature=t5Mf2wRe9wRUvsL61bcwgJg0hcQ%3D',
            'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4ac2e240c2fe406c8a88106c3bb2fb9f?x-expires=1624626000&x-signature=HYw7tqmRWza4ifdIoa0rn50g7aY%3D',
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
