import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


//let data = [];

export default class Home extends Component {

    constructor() {
      super();

        this.state = {
          data: [{key: 'a'}, {key: 'b'}],
        };
    };





    render() {

        return (

            <View style={styles.page}>
                <View style={styles.toplayer}>
                    <Text style={styles.logo}> logo </Text>
                </View>


                <ScrollableTabView
                    style={{marginTop: 20, }}
                    initialPage={1}
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarPosition={"bottom"}
                >



                    <Text tabLabel='Menu'>My</Text>

                    <ScrollView tabLabel='Main' style={styles.mainlayer}>
                        {/*<Text style={styles.logo}> main </Text>*/}
                        <FlatList
                            data={this.state.data}
                            renderItem={({item}) =>
                                <Text style={styles.text}
                                >
                                    {item.key}
                                    </Text>}
                        />
                    </ScrollView>

                    {/*<Text tabLabel='Tab #2'>favorite</Text>*/}
                    <Text tabLabel='setting'>project</Text>
                </ScrollableTabView>




                {/*<View style={styles.bottomlayer}>*/}
                    {/*<Text style={styles.logo}> bottom </Text>*/}
                {/*</View>*/}

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
