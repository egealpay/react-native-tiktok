import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import StyleConstants from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function DiscoverTopic({item, index, t}) {
    const renderImages = () => {
        return <View>
            <FlatList
                style={{marginTop: 16}}
                horizontal={true}
                data={item['list-items']}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <Image
                    style={{width: 105, height: 187, marginHorizontal: 2}}
                    resizeMode={'contain'}
                    source={{
                        uri: item,
                    }}
                />}
            />
        </View>;
    };

    const renderBasicInfo = () => {
        return <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
                borderRadius: 20,
                height: 40,
                width: 40,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: StyleConstants.SILVER_SAND,
            }}>
                <Feather name={item.type} size={20}/>
            </View>
            <View style={{flex: 1, paddingLeft: 16}}>
                <Text style={{fontWeight: '600', fontSize: 16}}>{item.name}</Text>
                <Text style={{marginTop: 8, color: StyleConstants.SPANISH_GRAY}}>{t('trending')} {t(item.type)}</Text>
            </View>
            <View style={{
                backgroundColor: StyleConstants.BRIGHT_GRAY,
                paddingHorizontal: 4,
                paddingVertical: 4,
                marginRight: 8,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{fontWeight: '600'}}>{item.count}</Text>
                <MaterialIcons name={'keyboard-arrow-right'} size={20}/>
            </View>
        </View>;
    };

    return <View key={index} style={{marginBottom: 24}}>
        {renderBasicInfo()}
        {renderImages()}
    </View>;
}

export default DiscoverTopic;
