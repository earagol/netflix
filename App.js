/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';

import List from './src/components/List';
import Slide from './src/components/Slider';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={[{flex:1},styles.container]}>
        <Slide/>
        <List/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  }
});
