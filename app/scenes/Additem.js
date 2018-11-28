import React, { Component } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Additem extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = { text: '' };

    }

    addNewitem = (props) => {
        //ITEMS.push({checked: false, key: 'test3'})
        // this.setState({
        //     refresh: !this.state.refresh
        // })
        //ITEMS.push({checked: false, key: 'testadd'})
        Actions.pop();
    }

    componentWillUnmount() {
        Actions.pop();
    }


    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.containerStyle}>
                    <TextInput
                        style={{height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            alignItems: 'stretch',
                            flex: 0.08,
                        }}
                        autoFocus = {true}
                        placeholder = 'Do something..'

                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />

                    <Button
                        onPress={() => this.addNewitem()}
                        title="OK"
                        color="#000000"
                        accessibilityLabel="Close"
                    />

                </View>

            </View>

        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20,
    },
};