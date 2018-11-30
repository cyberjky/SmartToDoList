import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    PixelRatio,
    StyleSheet,
    ScrollView,
    FlatList,
    AsyncStorage,
    TouchableHighlight,
    TextInput,
    Button,
    Dimensions,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import CheckBox from 'react-native-check-box';
import TodoModel from "../Models/TodoModel";
import ItemManager from "../ItemManager";
import {observer} from 'mobx-react/native';

const screenSize = Dimensions.get('window');

type TodoItem = {
    completed : Boolean,
    contents : String,
    createdAt: Date,
}

type State = {
    refresh: boolean,
}

@observer
export default class Home extends Component<{}, State>{

    todoLists: [];
    constructor(props) {
        super(props);

        this.state = {
            refresh: false,
        };
    };

    componentWillMount() {
        ItemManager.addNewitem(new TodoModel('hello?'));
        ItemManager.addNewitem(new TodoModel('it`s me!?'));
        ItemManager.addNewitem(new TodoModel('MacOS?'));
        ItemManager.addNewitem(new TodoModel('Xcode?'));
    }

    componentWillReceiveProps(nextProps) {
        console.log('new props',nextProps);
    }

    addNewitem = (item) => {
        this.todoLists.push(item);
    };

    removeListItem(item){
        this.todoLists = this.todoLists.filter( l => {
            return l.createdAt !== item.createdAt;
        });
    }

    onCompleated = (index) => {
        let chooseItem = this.todoLists[index];
        chooseItem.completed = !chooseItem.completed;
    };

    onClickCheckBox = (item, index) => {
        item.complete = !item.complete;
        // let todoItems = [ ...this.state.todoItems ];
        // let chooseItem = todoItems[index];
        // chooseItem.completed = !chooseItem.completed;
        // todoItems[index] = {...todoItems[index], chooseItem};
        this.setState({ refresh: !this.state.refresh });
    };

    // addNewitem = (item: TodoModel) => {
    //     let hasItem = item.contents.trim().length > 0;
    //     if (hasItem) {
    //         this.setState({ todoItems: [...this.state.todoItems, item] })
    //     }
    // };
    //
    // deleteItem = (i) => {
    //     const items = this.state.todoItems;
    //     this.setState({
    //         todoItems: items.splice(i, 1)
    //     })
    // };

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.toplayer}>
                    <Text style={styles.logo}
                          onPress={() => Actions.Additem()}
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
                            data={ItemManager.todoLists}
                            extraData={this.state.refresh}
                            renderItem={({ item, index }) => (
                                <CheckBox
                                    style={{flex: 1, padding: 10}}
                                    onClick={() => {
                                        this.onClickCheckBox(item, index)
                                    }}
                                    isChecked={item.completed}
                                    rightText={item.contents}
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        paddingTop: 50,
        paddingBottom: 50
    },
    image: {
        height: 250,
        width: undefined,
        marginBottom: 10
    },
    trackingToolbarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: screenSize.width,
        borderWidth: 0.5 / PixelRatio.get()
    },
    blurContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        fontSize: 17,
        backgroundColor: 'white',
        borderWidth: 0.5 / PixelRatio.get(),
        borderRadius: 19,
        paddingTop: 8,
        paddingBottom: 5,
        paddingLeft: 15,
    },
    sendButton: {
        paddingRight: 15,
        paddingLeft: 15
    }
});
