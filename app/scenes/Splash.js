import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const splashText = 'SmartToDoList';

export default class Splash extends Component {

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.icon}> Splash </Text>
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
    icon: {
        marginTop: 500 / 2 - 200,
        height: 100,
        width: 100,
    },
    logo: {
        width: 250,
    },
});
