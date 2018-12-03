import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Platform,
} from 'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { BlurView } from 'react-native-blur';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import CheckBox from 'react-native-check-box';
import {KeyboardAccessoryView, KeyboardUtils} from 'react-native-keyboard-input';
// import {observer} from 'mobx-react/native';


const IsIOS = Platform.OS === 'ios';
const TrackInteractive = true;


type Todoitem = {
  checked : Boolean,
  contents : String,

}

var ITEMS: Todoitem[] = [
    // {
    // checked: true,
    //     key: 'test',
    // },
    // {
    //     checked: false,
    //     key: 'test2',
    // }
]


// @observer
export default class Home extends Component<Props, State>{

    constructor(props) {
      super(props);
        this.keyboardAccessoryViewContent = this.keyboardAccessoryViewContent.bind(this);
        this.onKeyboardItemSelected = this.onKeyboardItemSelected.bind(this);
        this.resetKeyboardView = this.resetKeyboardView.bind(this);
        this.onKeyboardResigned = this.onKeyboardResigned.bind(this);

        this.state = {
            data : ITEMS,
            refresh : false,
            text: '',
            customKeyboard: {
                component: undefined,
                initialProps: undefined,
            },
            receivedKeyboardData: undefined,

        };

    };


    onKeyboardItemSelected(keyboardId, params) {
        const receivedKeyboardData = `onItemSelected from "${keyboardId}"\nreceived params: ${JSON.stringify(params)}`;
        this.setState({receivedKeyboardData});
    }

    // getToolbarButtons() {
    //     return [
    //         {
    //             text: 'show1',
    //             testID: 'show1',
    //             onPress: () => this.showKeyboardView('KeyboardView', 'FIRST - 1 (passed prop)'),
    //         },
    //         {
    //             text: 'show2',
    //             testID: 'show2',
    //             onPress: () => this.showKeyboardView('AnotherKeyboardView', 'SECOND - 2 (passed prop)'),
    //         },
    //         {
    //             text: 'reset',
    //             testID: 'reset',
    //             onPress: () => this.resetKeyboardView(),
    //         },
    //     ];
    // }

    resetKeyboardView() {
        this.setState({customKeyboard: {}});
    }

    onKeyboardResigned() {
        this.resetKeyboardView();
    }

    showKeyboardView(component, title) {
        this.setState({
            customKeyboard: {
                component,
                initialProps: {title},
            },
        });
    }

    keyboardAccessoryViewContent() {
        const InnerContainerComponent = (IsIOS && BlurView) ? BlurView : View;
        return (
            <InnerContainerComponent blurType="xlight" style={styles.blurContainer}>
                <View style={{borderTopWidth: StyleSheet.hairlineWidth, borderColor: '#bbb'}}/>

                <View style={styles.inputContainer}>
                    <AutoGrowingTextInput
                        maxHeight={200}
                        style={styles.textInput}
                        ref={(r) => {
                            this.textInputRef = r;
                        }}
                        placeholder={'Message'}
                        underlineColorAndroid="transparent"
                        onFocus={() => this.resetKeyboardView()}
                        testID={'input'}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={() => KeyboardUtils.dismiss()}>
                        <Text>Action</Text>
                    </TouchableOpacity>
                </View>

                    {/*<View style={{flexDirection: 'row'}}>*/}
                        {/*{*/}
                        {/*//     this.getToolbarButtons().map((button, index) =>*/}
                        {/*//         <TouchableOpacity onPress={button.onPress} style={{paddingLeft: 15, paddingBottom: 10}} key={index} testID={button.testID}>*/}
                        {/*//             <Text>{button.text}</Text>*/}
                        {/*//         </TouchableOpacity>)*/}
                        {/*// }*/}
                    {/*</View>*/}
            </InnerContainerComponent>
        );
    }


    componentWillReceiveProps() {
        this.setState({text: this.props.text});
        this.addNewitem();
    }



    dataRefresh = (item, index) => {
        item.checked = !item.checked
        ITEMS[index] = item
        this.setState({
            data: ITEMS
        })

    }


    addNewitem = () => {

        this.state.text == '' ? null : ITEMS.push({checked: false, key: this.state.text});
        this.setState({
            refresh: !this.state.refresh
        })
        // this.setState({
        //     text: '',
        // })

    }


    render() {
        return (

            <View style={styles.page}>
                <View style={styles.toplayer}>
                    <Text style={styles.logo}
                          onPress={() => KeyboardUtils.dismiss()}
                          //nPress={() => Actions.Additem()}
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

                <KeyboardAccessoryView
                    renderContent={this.keyboardAccessoryViewContent}
                    onHeightChanged={IsIOS ? height => this.setState({keyboardAccessoryViewHeight: height}) : undefined}
                    trackInteractive={TrackInteractive}
                    kbInputRef={this.textInputRef}
                    kbComponent={this.state.customKeyboard.component}
                    kbInitialProps={this.state.customKeyboard.initialProps}
                    onItemSelected={this.onKeyboardItemSelected}
                    onKeyboardResigned={this.onKeyboardResigned}
                    revealKeyboardInteractive
                />
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
    blurContainer: {
        ...Platform.select({
            ios: {
                flex: 1,
            },
        }),
    },
});
