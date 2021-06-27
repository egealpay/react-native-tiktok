import React from 'react';
import {Image, View, Text, ScrollView, Dimensions} from 'react-native';
import StyleConstants from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from './tabs';


const UserProfileScreenView = props => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const renderDetails = () => {
        return <View style={{marginTop: 16}}>
            <Text>{props.user.profileDetails}</Text>
        </View>;
    };

    const renderButtons = () => {
        return <View style={{flexDirection: 'row', marginTop: 16}}>
            <TouchableOpacity style={{backgroundColor: StyleConstants.RED}}>
                <Text style={{
                    fontSize: 16,
                    color: StyleConstants.WHITE,
                    paddingHorizontal: 48,
                    paddingVertical: 16,
                    fontWeight: '700',
                }}>Follow</Text>
            </TouchableOpacity>
            <View style={{
                marginLeft: 8,
                justifyContent: 'center',
                borderRadius: 4,
                borderWidth: 1,
                paddingHorizontal: 12,
                borderColor: StyleConstants.SILVER_SAND,
            }}>
                <MaterialCommunityIcons name={'instagram'} size={24}/>
            </View>
            <View style={{
                marginLeft: 8,
                justifyContent: 'center',
                borderRadius: 4,
                borderWidth: 1,
                paddingHorizontal: 12,
                borderColor: StyleConstants.SILVER_SAND,
            }}>
                <Ionicons name={'caret-down-outline'} size={18}/>
            </View>
        </View>;
    };

    const renderTextsAsColumn = (textBig, textSmall) => {
        return <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '700', marginBottom: 8}}>{textBig}</Text>
            <Text style={{color: StyleConstants.SPANISH_GRAY, fontSize: 12}}>{textSmall}</Text>
        </View>;
    };

    const renderFollowerCount = () => {
        return <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderTextsAsColumn(props.user.numFollowing, 'Following')}
            <View style={{height: 24, width: 1, backgroundColor: StyleConstants.BRIGHT_GRAY, marginHorizontal: 16}}/>
            {renderTextsAsColumn(props.user.numFollowers, 'Followers')}
            <View style={{height: 24, width: 1, backgroundColor: StyleConstants.BRIGHT_GRAY, marginHorizontal: 16}}/>
            {renderTextsAsColumn(props.user.numLikes, 'Likes')}
        </View>;
    };

    const renderBasicInformation = () => {
        return <View style={{marginTop: 16}}>
            {renderFollowerCount()}
        </View>;
    };

    const renderProfileImage = () => {
        return <View
            style={{
                marginTop: 24,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                style={{width: 96, height: 96, borderRadius: 48}}
                resizeMode={'cover'}
                source={{
                    uri: props.user.profileImageUrl,
                }}
            />
            <Text style={{marginTop: 24, fontWeight: '500', fontSize: 16}}>
                @{props.user.userName}
            </Text>
        </View>;
    };

    const renderSingleTabBar = (tabIndex, iconName) => {
        return <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setCurrentIndex(tabIndex)}>
                <MaterialCommunityIcons
                    name={iconName}
                    size={24}
                    color={currentIndex === tabIndex ? '#000' : StyleConstants.SPANISH_GRAY}
                />
            </TouchableOpacity>
            <View style={{height: 2, width: 48, backgroundColor: currentIndex === tabIndex ? '#000' : 'transparent'}}/>
        </View>;
    };

    const renderTabBars = () => {
        return <View style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 8,
            paddingTop: 4,
            paddingBottom: 8,
            borderTopWidth: 1,
            borderColor: StyleConstants.BRIGHT_GRAY,
        }}>
            {renderSingleTabBar(0, 'drag')}
            {renderSingleTabBar(1, 'heart-outline')}
        </View>;
    };

    function chunkArrayInGroups(arr, size) {
        let myArray = [];
        for (let i = 0; i < arr.length; i += size) {
            myArray.push(arr.slice(i, i + size));
        }
        return myArray;
    }

    const renderRecentPosts = () => {
        let tmpArr = chunkArrayInGroups(props.user.latestPosts, 3);

        tmpArr = tmpArr.map((subArr, index) => {
            return <View style={{flexDirection: 'row'}} key={index}>
                {subArr.map((post, _index) => <Image
                    key={post.thumbnailImage}
                    style={{width: Dimensions.get('window').width / 3, height: 230, marginHorizontal: 1}}
                    resizeMode={'contain'}
                    source={{
                        uri: post.thumbnailImage,
                    }}
                />)}
            </View>;
        });

        return <View>
            {tmpArr}
        </View>;
    };

    const renderRecentLikes = () => {
        return <View>
            <Text style={{marginTop: 16}}>Hi</Text>
        </View>;
    };

    const renderContent = () => {
        console.log('currentIndex: ', currentIndex);

        if (currentIndex === 0) {
            return renderRecentPosts();
        } else if (currentIndex === 1) {
            return <View>
                {renderRecentLikes()}
            </View>;
        }
    };

    return <ScrollView style={{backgroundColor: StyleConstants.WHITE}}>
        <View style={{flex: 1, backgroundColor: StyleConstants.WHITE, alignItems: 'center'}}>
            {renderProfileImage()}
            {renderBasicInformation()}
            {renderButtons()}
            {renderDetails()}
            {renderTabBars()}
            <Tabs latestPosts={props.user.latestPosts} currentIndex={currentIndex} userName={props.user.userName}/>
        </View>
    </ScrollView>;
};

export default UserProfileScreenView;
