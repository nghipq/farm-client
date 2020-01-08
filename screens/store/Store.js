import React from 'react'
import { View, StyleSheet, Linking, Alert} from 'react-native'
import lienhe from '../../assets/lienhe.png'
import StoreButton from '../../components/StoreButton'
import * as Facebook from 'expo-facebook';

async function logIn() {
    try {
      await Facebook.initializeAsync('853519481774732');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Linking.openURL("https://www.facebook.com/Chicken-Management-System-101131918088369/?modal=admin_todo_tour")
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [
                { id: 1, title: "Liên hệ tư vấn", Image: lienhe },
            ],
            longitude: 0,
            latitude: 0

        };
    }
    render() {
        const { navigation } = this.props;
        const { stores } = this.state;
        return (
            <View style={styles.container}>
                {stores.map(store => (<StoreButton key={store.id} 
                                                    animal={store}
                                                    onPress = {() => {
                                                        logIn()
                                                    }}
                                    />))}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BBEEB9",
        height: 1000,

    }
})
