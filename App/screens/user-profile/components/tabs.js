import React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import StyleConstants from '../../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MiscUtil from '../../../utils/misc-util';


const Tabs = ({latestPosts, userName, isAccountOwner}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const renderRecentPosts = () => {
        let tmpArr = MiscUtil.chunkArrayInGroups(latestPosts, 3);

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
        return <View style={{marginTop: 48, alignItems: 'center'}}>
            <Text
                style={{fontWeight: '600'}}>{isAccountOwner ? 'Only you can see which videos you liked' : 'This user\'s liked videos are private'}</Text>
            <Text style={{marginTop: 16, color: StyleConstants.SPANISH_GRAY}}>
                {isAccountOwner ? 'You can change this in Privacy settings' : `Videos liked by ${userName} are currently hidden`}</Text>
        </View>;
    };

    const renderPrivateVideos = () => {
        return <View style={{marginTop: 48, alignItems: 'center'}}>
            <Text style={{fontWeight: '600'}}>Your private videos</Text>
            <Text style={{marginTop: 8, color: StyleConstants.SPANISH_GRAY, textAlign: 'center', lineHeight: 30}}>To
                make your video
                visible only to
                yourself, set it to "Private" in the video's privacy settings</Text>
        </View>;
    };

    const renderContent = () => {
        if (currentIndex === 0) {
            return renderRecentPosts();
        } else if (currentIndex === 1) {
            return <View>
                {renderRecentLikes()}
            </View>;
        } else if (currentIndex === 2) {
            return <View>
                {renderPrivateVideos()}
            </View>;
        }
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
            {isAccountOwner && renderSingleTabBar(2, 'lock-outline')}
        </View>;
    };

    return <View style={{flex: 1, backgroundColor: StyleConstants.WHITE, alignItems: 'center'}}>
        {renderTabBars()}
        {renderContent()}
    </View>;
};

export default Tabs;
