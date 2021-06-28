import React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import StyleConstants from '../../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MiscUtil from '../../../utils/misc-util';


const Tabs = ({latestPosts, userName}) => {
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
            <Text style={{fontWeight: '600'}}>This user's liked videos are private</Text>
            <Text style={{marginTop: 16, color: StyleConstants.SPANISH_GRAY}}>Videos liked by {userName} are currently
                hidden</Text>
        </View>;
    };

    const renderContent = () => {
        if (currentIndex === 0) {
            return renderRecentPosts();
        } else if (currentIndex === 1) {
            return <View>
                {renderRecentLikes()}
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
        </View>;
    };

    return <View style={{flex: 1, backgroundColor: StyleConstants.WHITE, alignItems: 'center'}}>
        {renderTabBars()}
        {renderContent()}
    </View>;
};

export default Tabs;
