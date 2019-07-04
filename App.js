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

import SideMenu from 'react-native-side-menu';

import List from './src/components/List';
import Slide from './src/components/Slider';
import Header from './src/components/Header';
import Menu from './src/components/Menu';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen});
  }

  render() {
    return (
      <View style={[{flex:1},styles.container]}>
        <SideMenu
          menu={<Menu />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <Header toggle={this.toggle.bind(this)} />
          <Slide/>
          <List/>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  }
});
