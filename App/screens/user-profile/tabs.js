import React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import StyleConstants from '../../styles';


const Tabs = ({latestPosts, currentIndex, userName}) => {

    function chunkArrayInGroups(arr, size) {
        let myArray = [];
        for (let i = 0; i < arr.length; i += size) {
            myArray.push(arr.slice(i, i + size));
        }
        return myArray;
    }

    const renderRecentPosts = () => {
        let tmpArr = chunkArrayInGroups(latestPosts, 3);

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

    return <View>
        {renderContent()}
    </View>;
};

export default Tabs;
