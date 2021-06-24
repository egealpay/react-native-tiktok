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
    }, {
        id: 2,
        video: require('../../assets/ssstiktok_1624522820.mp4'),
        profileImageUrl: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e3328223da5577e78ce7f33729c2dd~c5_720x720.jpeg?x-expires=1624608000&x-signature=NkuyzXFmHlIGRuIRr7gSELgAJj0%3D',
        numOfLikes: '12.0K',
        numOfComments: '71',
        numOfShare: '58',
    }]);

    return <HomeScreenView navigation={props.navigation} posts={posts}/>;
}

export default HomeScreenContainer;
