import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
export default function AnimalButtom(props) {
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
            borderRadius: 20,
            margin: 16,
            alignItems: 'center',
            padding: 8,
            marginLeft: 20,
            marginRight: 20
        },
        title: {
            fontSize: 25,
        },
        image:{
            height: 120,
            width:120,
            
        }
    }
)
