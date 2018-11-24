import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, FlatList, TouchableHighlight, } from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import CheckBox from 'react-native-check-box';




type Todoitem = {
  checked : Boolean,
  contents : String,

}

var ITEMS: Todoitem[] = [
    {
    checked: true,
        key: 'test',
    },
    {
        checked: false,
        key: 'test2',
    }
]

export default class Home extends Component{

    constructor() {
      super();

        this.state = {
            data : ITEMS,
            refresh : false,

        };

    };


    dataRefresh = (item, index) => {
        item.checked = !item.checked
        ITEMS[index] = item
        this.setState({
            data: ITEMS
        })

    }

    // // componentWillMount() {
    // //   let { data, checked } = this.state;
    // //   let intialCheck = data.map(x => false);
    // //   this.setState({ checked: intialCheck })
    // // }
    //
    //
    // handleChange = (index) => {
    //   let checked = [...this.state.checked];
    //   checked[index] = !checked[index];
    //   this.setState({ checked });
    // }

    render() {
        return (

            <View style={styles.page}>
                <View style={styles.toplayer}>
                    <Text style={styles.logo}
                          onPress={Actions.Additem}
                    >
                        Add
                    </Text>
                    <Text style={styles.logo}> logo </Text>
                    <Text style={styles.logo}> temp </Text>

                </View>


                <ScrollableTabView
                    initialPage={1}
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarPosition={"bottom"}
                >



                    <Text tabLabel='Menu'>My</Text>


                    <ScrollView tabLabel='Main' style={styles.mainlayer}>


                        <FlatList
                            data={this.state.data}
                            extraData={this.state.refresh}
                            renderItem={({ item, index }) => (
                              <CheckBox
                                  style={{flex: 1, padding: 10}}
                                  onClick={() => {
                                      this.dataRefresh(item, index)
                                      this.setState({
                                          refresh: !this.state.refresh
                                      })
                                  }}
                                  isChecked={item.checked}
                                  rightText={item.key}
                              />
                                )}

                        />



                    </ScrollView>

                     <Text tabLabel='setting'>project</Text>
                </ScrollableTabView>


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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 25,

    },
    logo: {
        fontSize: 20,
        flexDirection: 'row',
    },
});
