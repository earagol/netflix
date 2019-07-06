import React, {Component} from 'react';

import {Router, Stack, Scene } from 'react-native-router-flux';

import App from '../App';
import Search from './components/Search';

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Stack key="root">
                <Scene key="app" component={App} title="App" animationEnabled={false}  initial hideNavBar={true}/>
                <Scene key="search" component={Search} animationEnabled={false}  hideNavBar={true}/>
                </Stack>
            </Router>
        );
    }
}