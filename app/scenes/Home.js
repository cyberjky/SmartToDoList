import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, FlatList, TouchableHighlight, } from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import CheckBox from 'react-native-check-box'
//let data = [];

export default class Home extends Component {

    constructor() {
      super();

        this.state = {
            checked: [],
          data: [
              {
                  key: 'hello',
              },
              {
                  key: 'Welcome',
              },

          ]
        };

    };


    componentWillMount() {
      let { data, checked } = this.state;
      let intialCheck = data.map(x => false);
      this.setState({ checked: intialCheck })
    }


    handleChange = (index) => {
      let checked = [...this.state.checked];
      checked[index] = !checked[index];
      this.setState({ checked });
    }

    render() {
      let { data, checked } = this.state;
        return (

            <View style={styles.page}>
                <View style={styles.toplayer}>
                    <Text style={styles.logo}> logo </Text>
                </View>


                <ScrollableTabView
                    initialPage={1}
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarPosition={"bottom"}
                >



                    <Text tabLabel='Menu'>My</Text>


                    <ScrollView tabLabel='Main' style={styles.mainlayer}>
                        {/*<Text style={styles.logo}> main </Text>*/}

                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => (
                              <CheckBox
                                  style={{flex: 1, padding: 10}}
                                  onClick={()=>{
                                    this.setState({
                                        isChecked:!this.state.isChecked
                                    })
                                  }}
                                  isChecked={this.state.isChecked}
                                  rightText={item.key}
                              />
                                )}

                                // <TouchableHighlight
                                // onPress={() => this._onPress(item)}
                                // onShowUnderlay={item.highlight}
                                // onHideUnderlay={item.unhighlight}>
                                // <View style={{backgroundColor: 'white'}}>
                                // <Text style={styles.text}>{item.key}</Text>
                                // </View>
                                // </TouchableHighlight>
                                // )}
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
