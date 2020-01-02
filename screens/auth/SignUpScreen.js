import React, { Component } from "react";
import axios from 'axios';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Alert
} from "react-native";

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
          enter: '',
          email: '',
          address: '',
          phone: '',
        };
      }
      
      onLogin() {
        const { username, password, enter, email, address, phone } = this.state;
        const item = {
            username: username,
            password: password,
            enter: enter,
            email: email,
            address: address,
            
            phone: phone
        }
        if(username==""){
            Alert.alert('Tên không được bỏ trống!');
        }
        else if(email.indexOf('@')==-1){
            Alert.alert('Email không hợp lệ!');
        }
        else if(address==""){
            Alert.alert('Địa chỉ không được bỏ trống!');
        }
        else if(phone.length!=10){
            Alert.alert('Số điện thoại không hợp lệ!');
        }
        else if(password==""){
            Alert.alert('Mật khẩu không được bỏ trống!');
        }
        else{
        axios.post(`/register?email=${email}&password=${password}&username=${username}&address=${address}&confirm_password=${enter}`).then(res => {
            if(res.data.success) {
                Alert.alert('Bạn đã đăng ký thành công. Vui lòng đăng nhập!');
                this.props.navigation.navigate('Welcome')
            }
            else {
                Alert.alert(`${res.data.error}`);
            }
        })
      }}
    
      render() {
        return (
          <View style={styles.container}>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Tên đăng nhập'}
              style={styles.input}
            />
            <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'Email'}
              style={styles.input}
            />
            <TextInput
              value={this.state.address}
              onChangeText={(address) => this.setState({ address })}
              placeholder={'Địa chỉ'}
              style={styles.input}
            />
            <TextInput
              value={this.state.phone}
              onChangeText={(phone) => this.setState({ phone })}
              placeholder={'Phone'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Mật khẩu'}
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput
              value={this.state.enter}
              onChangeText={(enter) => this.setState({enter})}
              placeholder={'Nhập lại mật khẩu'}
              secureTextEntry={true}
              style={styles.input}
            />
            
            
            <Button
              title={'Đăng ký'}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
            />
            
          </View>
        );
      }
    }
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BBEEB9',
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