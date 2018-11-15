import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';


export default class Home extends Component {

    render() {
        return (

            <View style={styles.page}>
                <View style={styles.toplayer}>
                    <Text style={styles.logo}> logo </Text>
                </View>

                <ScrollView style={styles.mainlayer}>
                    {/*<Text style={styles.logo}> main </Text>*/}

                    <Text style={styles.text}> 할일1 </Text>
                    <Text style={styles.text}> 할일2 </Text>
                    <Text style={styles.text}> 할일3 </Text>

                </ScrollView>

                <View style={styles.bottomlayer}>
                    <Text style={styles.logo}> bottom </Text>
                </View>

            </View>

        );
    }
}


let styles = StyleSheet.create({
    page: {
        marginTop: 30,
        flex: 1,
        backgroundColor: '#a2d8e2',
    },
    toplayer: {
        flex: 0.08,
        borderColor: '#AAAAAA',
        borderWidth: 1,
        //height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainlayer: {
        flex: 0.84,
    },

    bottomlayer: {
        flex: 0.08,
        borderColor: '#AAAAAA',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    logo: {
        fontSize: 20,
        flexDirection: 'row',
    },
});
