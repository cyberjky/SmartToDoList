import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';


const splashText = 'SmartToDoList';

export default class Splash extends Component {

    componentWillMount() {

        setTimeout(() => {
            Actions.home();
        }, 2500);

    }


    render() {
            return (
                <View style={styles.page}>
                    <Text style={styles.logo}> SmartToDolist </Text>
                    <Text style={{
                        flex: 0.8,
                        fontSize: 20,

                    }}

                    > Just Do </Text>
                    <Text style={styles.text}> Copyright 2018 JJols </Text>
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
        fontSize: 16,
        alignItems: 'center',
    },
    logo: {
        fontSize: 50,
        marginTop: 200,
    },
});
