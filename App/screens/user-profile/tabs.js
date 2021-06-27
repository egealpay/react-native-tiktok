import React from 'react';
import {useWindowDimensions, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleConstants from '../../styles';


const Tabs = props => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', icon: 'drag', title: 'First'},
        {key: 'second', icon: 'heart-outline', title: 'Second'},
    ]);

    const FirstRoute = () => (
        <View style={{flex: 1}}/>
    );

    const SecondRoute = () => (
        <View style={{flex: 1}}/>
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return <View style={{flex: 1, marginTop: 16}}>
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            style={{width: layout.width}}
            renderTabBar={props =>
                <TabBar
                    {...props}
                    renderIcon={({route, focused, color}) => (
                        <MaterialCommunityIcons
                            name={route.icon}
                            size={24}
                            color={focused ? '#000' : StyleConstants.SPANISH_GRAY}
                        />
                    )}
                    renderLabel={({route, focused, color}) => null}
                    style={{backgroundColor: StyleConstants.WHITE}}
                    indicatorStyle={{
                        width: 32,
                        left: (Dimensions.get('window').width / 2 - 32) / 2,
                        backgroundColor: '#000',
                    }}
                />
            }
        />
    </View>;
};

export default Tabs;
