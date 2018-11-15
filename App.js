/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';
import Splash from './app/scenes/Splash';
import Home from './app/scenes/Home';

export default class App extends Component {
  render() {
    return (
        <Router
            key="root"
            hideNavBar
        >
            <Scene key="root" hideNavBar>
                <Scene key="Splash" component={Splash} initial/>
                <Scene key="home" component={Home} type={ActionConst.REPLACE} />
            </Scene>
        </Router>
    );
  }
}
