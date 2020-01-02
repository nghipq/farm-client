import React from 'react'
import {View, Button, StyleSheet, AsyncStorage} from 'react-native'

export default class Setting extends React.Component {
        signOut = async () => {
            AsyncStorage.clear()
            this.props.navigation.navigate('AuthLoading')
        }
        
        render() {
            return (
                <View style={styles.container}>
                    <Button title="Sign Out" onPress={this.signOut} />
                </View>
            );
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});