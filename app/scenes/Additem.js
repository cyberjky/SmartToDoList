import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Additem extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.containerStyle}>

                    <Text>Post.</Text>

                    <Button
                        onPress={Actions.pop}
                        title="Close"
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
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
};