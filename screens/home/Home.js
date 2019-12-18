import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { render } from 'react-dom';
import HomeItem from '../../components/HomeListItem'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Giới thiệu'},
        { id: 2, name: 'Hướng dẫn'},
        { id: 3, name: 'Đóng góp ý kiến'}
      ]
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <FlatList
        data = {categories}
        renderItem = {({item}) =>
          <HomeItem category={item} />}
        keyExtractor = {item => `${item.id}`}
        contentContainerStyle = {styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BBEEB9",
    height: 1000,
    //justifyContent: 'center',
    paddingTop: 26,
    paddingLeft: 26,
    paddingRight: 26
  }
})