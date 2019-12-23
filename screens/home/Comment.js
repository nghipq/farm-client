import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Đóng góp ý kiến'
    };
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textbox}>
          <TextInput
          multiline
          numberOfLines={9}
          placeholder="_ Viết ý kiến của bạn ở đây"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
        </View>
        <View style={styles.button} >
          <TouchableOpacity onPress={() => {
            Alert.alert('Cảm ơn bạn đã đóng góp ý kiến!');
          }}>
            <Text style={{color: 'white', fontSize: 20}}> Gửi </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBEEB9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 40
  },
  textbox: {
    backgroundColor: "#fff",
    borderColor: 'gray', 
    width: 350,
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'stretch'
  },
  button: {
    justifyContent: 'center',
    marginTop: 30,
    width: 100,
    height: 50,
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#5ea7b9',
    
  }
});
