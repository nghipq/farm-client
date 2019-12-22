import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import logo from '../../assets/logo_team.png'

export default class Intro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Giới thiệu'
    };
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:150, height:50}} source={logo}/>
        <Text style={styles.text}>-Là phần mềm có chức năng nhận diện bệnh gà qua hình ảnh mà người dùng cung cấp và đưa ra những biện pháp xử lí để kịp thời ngăn chặn bệnh lây lan. </Text>
        <Text style={styles.text}>-Là phần mềm sẽ kết nối với các đại lí phân phối các sản phẩm chăn nuôi như thuốc chữa trị, thức ăn và các cơ sở thú y cho người chăn nuôi.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop:70,
    
  },
  text: {
    fontSize: 20,
    paddingTop:20
    
  },
});
