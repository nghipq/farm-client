import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView, Button, Linking} from 'react-native'
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
        Linking.openURL("https://www.facebook.com/Chicken-Management-System-101131918088369")
        Linking.openURL("https://www.facebook.com/Chicken-Management-System-101131918088369/")
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

export default function Result(props) {
    const { info } = props

    return (
        <ScrollView>
            <Text style={styles.title}>Tên bệnh:</Text>
            <Text>{info.sickeness}</Text>
            <Text style={styles.title}>Cách xử lý:</Text>
            <Text>{info.solution}</Text>
            <Text style={styles.title}>Hỗ trợ tư vấn:</Text>
            <Text>{info.phoneNumber}</Text>
            <Text style={styles.title}>Liên hệ với chuyên gia</Text>
            <Button
                title="Liên hệ tư vấn"
                onPress={() => logIn()}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "700",
    }
})

