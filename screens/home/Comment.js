import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

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
        <View style={styles.button}>
          <Button title="Gửi"  />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBEEB9',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 40
  },
  textbox: {
    backgroundColor: "#fff",
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 18
  },
  button: {
    marginLeft: 130,
    marginRight: 130,
    marginTop: 30,
    // backgroundColor: '#FFFFFF',
    // color: 'black',
    borderRadius: 18
  }
});
