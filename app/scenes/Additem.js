import React, { Component } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Additem extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            text: '',
        };


    }

    getitem = (props) => {
        // console.log(this.state.text);
        //props.addItem({text: this.state.text});
        // props.addNewitem({text: this.state.text});
        Actions.pop();
        Actions.refresh({text: this.state.text});
        //Actions.pop({text:this.state.text});
        // home에 있는 함수호출
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
                        onPress={() => this.getitem() }
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
