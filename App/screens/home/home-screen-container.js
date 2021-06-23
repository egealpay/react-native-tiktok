import React, {useState} from 'react';
import HomeScreenView from './home-screen-view';

function HomeScreenContainer(props) {
    const [posts, setPosts] = useState([{
        id: 1,
        video: require('../../assets/ssstiktok_1624187822.mp4'),
        profileImageUrl: 'https://i.pinimg.com/originals/b0/d2/c9/b0d2c95644f49051099ca2704ad66b4f.jpg',
        numOfLikes: '27.0K',
        numOfComments: '333',
        numOfShare: '216',
    }]);

    return <HomeScreenView navigation={props.navigation} posts={posts}/>;
}

export default HomeScreenContainer;
