import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';


const splashText = 'SmartToDoList';

export default class Splash extends Component {



    goHome = () => {
        Actions.home()
    };

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.logo}> Splash </Text>
                <Text style={styles.text}
                    //style={{width: 60, alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => this.goHome()}
                > START </Text>
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
