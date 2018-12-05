import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    PixelRatio,
    Platform,
} from 'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { BlurView } from 'react-native-blur';
import {ActionConst, Actions, Lightbox, Reducer, Router, Scene} from 'react-native-router-flux';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import CheckBox from 'react-native-check-box';
import {KeyboardAccessoryView, KeyboardUtils} from 'react-native-keyboard-input';
import '../component/demoKeyboards';


const IsIOS = Platform.OS === 'ios';
const TrackInteractive = true;


type Todoitem = {
  checked : Boolean,
  contents : String,

}

var ITEMS: Todoitem[] = [
    {
    checked: false,
        key: 'test123',
    },
    {
        checked: false,
        key: 'test2123',
    }
]



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


    resetKeyboardView() {
        this.setState({customKeyboard: {}});
    }

    onKeyboardResigned() {
        this.resetKeyboardView();
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
                        onChangeText={(text) => this.setState({text})}
                        placeholder={'Write To Do item'}
                        underlineColorAndroid="transparent"
                        onFocus={() => this.resetKeyboardView()}
                        testID={'input'}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={
                        () => {
                            KeyboardUtils.dismiss();
                            this.addNewitem();
                            this.textInputRef.clear();
                        }
                    }
                    >
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>

            </InnerContainerComponent>
        );
    }


    dataRefresh = (item, index) => {
        item.checked = !item.checked
        ITEMS[index] = item
        this.setState({
            data: ITEMS
        })

    }


    addNewitem = () => {

        // console.log(this.textInputRef);
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
                    >Temp</Text>
                    <Text style={styles.logo}> logo </Text>
                    <Text style={styles.logo}> temp </Text>
                </View>

                <ScrollableTabView
                    style={{marginBottom: 50, }}
                    initialPage={1}
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarPosition={"bottom"}
                >

                    <Text tabLabel='Menu'>My</Text>

                    <ScrollView tabLabel='Main' style={styles.mainlayer}
                                keyboardDismissMode={TrackInteractive ? 'interactive' : 'none'}
                    >
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 25,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 2,
        paddingBottom: 5,
        fontSize: 16,
        backgroundColor: 'white',
        borderWidth: 0.5 / PixelRatio.get(),
        borderRadius: 18,
    },
    sendButton: {
        paddingRight: 15,
        paddingLeft: 15,
        alignSelf: 'center',
    },
});
