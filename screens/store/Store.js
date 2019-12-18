import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Store(props) {
    return(
        <View style={styles.container}>
            <Text>Store</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BBEEB9",
        height: 1000,
    }
})