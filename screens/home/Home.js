import React from 'react';
import { StyleSheet, FlatList, AsyncStorage } from 'react-native';
import { render } from 'react-dom';
import HomeItem from '../../components/HomeListItem'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Giới thiệu', pageName: 'Intro'},
        { id: 2, name: 'Hướng dẫn', pageName: 'Tutorial'},
        { id: 3, name: 'Đóng góp ý kiến', pageName: 'Comment'}
      ]
    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <FlatList
        data = {categories}
        renderItem = {({item}) =>
          <HomeItem 
            category={item} 
            onPress={() => navigation.navigate(item.pageName)}
          />}
        keyExtractor = {item => `${item.id}`}
        contentContainerStyle = {styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BBEEB9",
    height: 700,
    paddingTop: 40,
    paddingLeft: 26,
    paddingRight: 26
  }
})