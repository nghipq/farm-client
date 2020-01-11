import React, { Component } from "react";
import { AsyncStorage } from 'react-native'
import axios from 'axios';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Alert
} from "react-native";

class WelcomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }
    onLogin() {
        // const { username, password } = this.state;
        // const item = {
        //     username: username,
        //     password: password
        // }
        // axios.post(`/login?email=${username}&password=${password}`).then(res => {
        //     if(res.data.success) {
        //         Alert.alert('Thành công', `Chào ${res.data.username}`);
        //         AsyncStorage.setItem('id', JSON.stringify(res.data.id));
        //         this.props.navigation.navigate('App')
        //     }
        //     else {
        //         Alert.alert(`${res.data.error}`);
        //     }
        // })

        this.props.navigation.navigate('App') 
      }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Email'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Mật khẩu'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Text style={styles.bt} onPress={this.onLogin.bind(this)}> ĐĂNG NHẬP </Text>


                <Text style={styles.bt} onPress={() => this.props.navigation.navigate('SignUp')}> ĐĂNG KÝ </Text>
            </View>
        );
    }
}
export default WelcomeScreen
    ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BBEEB9',
    },
    bt: {
        margin: 10,
        backgroundColor: '#1c64ff',
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 15,
        borderRadius: 18,
        textAlign: "center",
        padding: 10,
        width: 150,
        color: '#fff'
    },
    input: {
        width: 250,
        height: 54,
        padding: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 18,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
});