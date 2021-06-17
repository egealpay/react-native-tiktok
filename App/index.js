/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabNavigator from './navigation/tab-navigator';


const App: () => Node = () => {
    useEffect(() => [
        RNBootSplash.hide({fade: true}),
    ]);

    return <SafeAreaProvider>
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    </SafeAreaProvider>;
};


export default App;
