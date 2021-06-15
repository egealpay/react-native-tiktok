/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RNBootSplash from "react-native-bootsplash";

const App: () => Node = () => {
  useEffect(() => [
    RNBootSplash.hide({ fade: true })
]);

  return <SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({});

export default App;
