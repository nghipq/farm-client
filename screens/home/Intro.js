import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Intro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Giới thiệu'
    };
  };
  
  render() {
    return (
      <View>
        <Text>_ Giới thiệu ứng dụng</Text>
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
