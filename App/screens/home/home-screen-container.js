import React, {useState} from 'react';
import HomeScreenView from './home-screen-view';

function HomeScreenContainer(props) {
    const [posts, setPosts] = useState([{
        video: require('../../assets/ssstiktok_1624187822.mp4'),
    }]);

    return <HomeScreenView navigation={props.navigation} posts={posts}/>;
}

export default HomeScreenContainer;
