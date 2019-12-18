import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Intro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Hướng dẫn'
    };
  };
  
  render() {
    return (
      <View>
        <Text>_ Hướng dẫn sử dụng ứng dụng</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
