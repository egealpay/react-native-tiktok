import React, {useState} from 'react';
import HomeScreenView from './home-screen-view';
import {useTranslation} from 'react-i18next';

function HomeScreenContainer(props) {
    const {t, i18n} = useTranslation();

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
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6d03e856d1aa468485bd0dd3d6a20b98?x-expires=1624809600&x-signature=rq9zNrJaR70GhxVBP2tbBz9z9Ec%3D',
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/95134b89e6b24fe5a96caa2da1959e34_1624725354?x-expires=1624809600&x-signature=dx8obj0eDwVIw5C1erpzFnWm0DY%3D',
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ca38271f29864857b09adb1a2a1b06ff?x-expires=1624809600&x-signature=0C9wX3yzwtRidKIMTwaOoENivkI%3D',
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/769963a2679b4d4f8d09b161ddbd1b65?x-expires=1624809600&x-signature=g2tptkkUOmBpZKxv%2Bavfk11KqLs%3D',
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/94931601c9e14641803d04ee0eb6aa70?x-expires=1624809600&x-signature=g0u9IKhZro2ieoL5gNDT2UteZyo%3D',
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f12993ef3db742ddb4251a150788aad4?x-expires=1624809600&x-signature=U6ZYul%2BwxC%2BB68%2B0HyKkne6RNlQ%3D',
            }],
        },
        numOfLikes: '27.0K',
        numOfComments: '333',
        numOfShare: '216',
        dateOfPost: '06-20',
    }, {
        id: 2,
        video: require('../../assets/ssstiktok_1624522820.mp4'),
        user: {
            userName: 'addisonre',
            profileImageUrl: 'https://cdn.vox-cdn.com/thumbor/l3Jo67H4fAYZVj6dLk0IpnavzsM=/0x0:2938x3600/1200x800/filters:focal(1095x733:1565x1203)/cdn.vox-cdn.com/uploads/chorus_image/image/67392918/1208515622.jpg.0.jpg',
            numFollowing: '2451',
            numFollowers: '81.5M',
            numLikes: '5.3B',
            profileDetails: 'OBSESSED out on all platforms.',
            latestPosts: [{
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/822ff981442242a4a28fa4c9570b4496?x-expires=1624906800&x-signature=XMtvAYX2cRyD1i8BqvHVatLseY4%3D',
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/553c680ca0b8452398fb5f331bdb6d83?x-expires=1624906800&x-signature=6qrOn%2F3hB8%2B4ZgxhdKyI3qt%2BQWI%3D',
            }, {
                thumbnailImage: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/99534424f0a245339ff48ef51952ec91?x-expires=1624906800&x-signature=gtlfKpAl9zkKfPN6WYg%2BFVQCwY0%3D',
            }],
        },
        numOfLikes: '12.0K',
        numOfComments: '71',
        numOfShare: '58',
        dateOfPost: '06-18',
        postDetails: 'I am obsessed.'
    }]);

    return <HomeScreenView navigation={props.navigation} posts={posts} t={t}/>;
}

export default HomeScreenContainer;
