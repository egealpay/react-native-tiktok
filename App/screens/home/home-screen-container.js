import React, {useState} from 'react';
import HomeScreenView from './home-screen-view';

function HomeScreenContainer(props) {
    const [posts, setPosts] = useState([{
        id: 1,
        video: require('../../assets/ssstiktok_1624187822.mp4'),
        user: {
            userName: 'charlidamelio',
            profileImageUrl: 'https://i.pinimg.com/originals/b0/d2/c9/b0d2c95644f49051099ca2704ad66b4f.jpg',
            numFollowing: '1210',
            numFollowers: '118.5M',
            numLikes: '9.5B',
            profileDetails: 'No bio yet.',
            latestPosts: [{
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6d03e856d1aa468485bd0dd3d6a20b98?x-expires=1624809600&x-signature=rq9zNrJaR70GhxVBP2tbBz9z9Ec%3D'
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/95134b89e6b24fe5a96caa2da1959e34_1624725354?x-expires=1624809600&x-signature=dx8obj0eDwVIw5C1erpzFnWm0DY%3D'
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ca38271f29864857b09adb1a2a1b06ff?x-expires=1624809600&x-signature=0C9wX3yzwtRidKIMTwaOoENivkI%3D'
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/769963a2679b4d4f8d09b161ddbd1b65?x-expires=1624809600&x-signature=g2tptkkUOmBpZKxv%2Bavfk11KqLs%3D'
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/94931601c9e14641803d04ee0eb6aa70?x-expires=1624809600&x-signature=g0u9IKhZro2ieoL5gNDT2UteZyo%3D'
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f12993ef3db742ddb4251a150788aad4?x-expires=1624809600&x-signature=U6ZYul%2BwxC%2BB68%2B0HyKkne6RNlQ%3D'
            }]
        },
        numOfLikes: '27.0K',
        numOfComments: '333',
        numOfShare: '216',
    }, {
        id: 2,
        video: require('../../assets/ssstiktok_1624522820.mp4'),
        user: {
            userName: 'addisonre',
            profileImageUrl: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e3328223da5577e78ce7f33729c2dd~c5_720x720.jpeg?x-expires=1624608000&x-signature=NkuyzXFmHlIGRuIRr7gSELgAJj0%3D',
            numFollowing: '2451',
            numFollowers: '81.5M',
            numLikes: '5.3B',
            profileDetails: 'OBSESSED out on all platforms.',
            latestPosts: []
        },
        numOfLikes: '12.0K',
        numOfComments: '71',
        numOfShare: '58',
    }]);

    return <HomeScreenView navigation={props.navigation} posts={posts}/>;
}

export default HomeScreenContainer;
