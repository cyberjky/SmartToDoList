/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene, Modal} from 'react-native-router-flux';
import Splash from './app/scenes/Splash';
import Home from './app/scenes/Home';
import Additem from './app/scenes/Additem';

export default class App extends Component {
  render() {
    return (

        <Router>
            <Modal>
            <Scene key="root" hideNavBar>
                <Scene key="Splash" component={Splash} />
                <Scene key="Home" component={Home} type={ActionConst.REPLACE} initial/>
            </Scene>
            <Scene key="Additem" component={Additem} hideNavBar/>
            </Modal>
        </Router>
    );
  }
}
