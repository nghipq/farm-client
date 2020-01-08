import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native'

export default function Result(props) {
    const { info } = props

    return (
        <ScrollView>
            <Text style={styles.title}>Tên bệnh:</Text>
            <Text>{info.sickness}</Text>
            <Text style={styles.title}>Cách xử lý:</Text>
            <Text>{info.solution}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "700",
    }
})

