import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
export default function StoreButton(props) {
    const { animal, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title} > {animal.title}  </Text>
                <Image style={styles.image} source={animal.Image} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            border: solid,
            borderRadius: 20,
            margin: 16,
            alignItems: 'center',
            padding: 8,
            marginLeft: 10,
            marginRight: 10
        },

        title: {
            fontSize: 25,
            fontWeight: "600",
            padding: 15
        },

        image:{
            height: 200,
            width:200,
            padding: 10            
        }
    }
)
