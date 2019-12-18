import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function HomeItem(props) {
    const {category, onPress} = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    );   
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 16,
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    title: {
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 26
    }
});