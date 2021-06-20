import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Image} from 'react-native';
import StyleConstants from '../../styles';

const DiscoverCarousel = props => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [entries, setEntries] = useState([{
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    }, {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'https://i.imgur.com/MABUbpDl.jpg',
        },
        {
            title: 'Acrocorinth, Greece',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
        },
        {
            title: 'The lone tree, majestic landscape of New Zealand',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
        }]);

    function _renderItem({item, index}) {
        return <View style={{backgroundColor: StyleConstants.SPANISH_GRAY, height: 220}}>
            <Image
                style={{flex: 1}}
                source={{
                    uri: item.illustration,
                }}
            />
        </View>;
    }

    function pagination() {
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    paddingBottom: 16,
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: StyleConstants.WHITE,
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    return <View style={{marginVertical: 16}}>
        <Carousel
            data={entries}
            sliderWidth={400}
            itemWidth={400}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveSlide(index)}
        />
        {pagination()}
    </View>;
};

export default DiscoverCarousel;
