import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableHighlight,
    TextInput,
    Button,
} from 'react-native';
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


export default class Home extends Component<Props, State>{

    constructor(props) {
      super(props);
        this.state = {
            data : ITEMS,
            refresh : false,

        };
        console.log('get data? : ', this.props);

    };

    componentDidMount(){
        console.log('get data? : ', this.props);
    }

    componentWillMount() {
        console.log('get data? : ', this.props);
    }


    dataRefresh = (item, index) => {
        item.checked = !item.checked
        ITEMS[index] = item
        this.setState({
            data: ITEMS
        })

    }


    addNewitem = () => {

        // let getkey = 'test123';
        // console.log(getkey);
        ITEMS.push({checked: false, key: getkey})
        // this.setState({
        //     refresh: !this.state.refresh
        // })

    }


    render() {
        return (

            <View style={styles.page}>
                <View style={styles.toplayer}>
                    <Text style={styles.logo}
                          onPress={() => Actions.Additem()}
                          // onPress={() => this.addNewitem()}
                    >Adds</Text>
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
