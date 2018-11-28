import React, { Component } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Additem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

    }

    getitem = () => {
        //console.log(this.state.text);
        //console.log(props);
        //props.addItem({text: this.state.text});
        //Actions.refresh({text: this.state.text});

        setTimeout(()=> {Actions.refresh({key:"Home", text: this.state.text})}, 500); Actions.pop();
        //Actions.refresh({key:"Home", text: this.state.text});
        //Actions.pop();
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
