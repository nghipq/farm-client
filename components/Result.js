import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Result(props) {
    const { info } = props

    return (
        <View>
            <Text style={styles.title}>Tên bệnh:</Text>
            <Text>{info.sickness}</Text>
            <Text></Text>
            <Text style={styles.title}>Cách xử lý:</Text>
            <Text>{info.solution}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "700",
    }
})

