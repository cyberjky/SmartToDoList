import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';


export default class Home extends Component {

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.logo}> HOME </Text>
                <Text style={styles.text}
                      onPress={() => Actions.pop()}
                > GO Back </Text>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#a2d8e2',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 0.9,
        fontSize: 20,
    },
    logo: {
        fontSize: 30,
        marginTop: 250,
    },
});
