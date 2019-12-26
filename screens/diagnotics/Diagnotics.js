import React from 'react'
import {View, Text} from 'react-native'

export default class Diagnotics extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        }
    }


    render() {
        return(
            <View>
                <Text>Hahaha</Text>
            </View>
        )
    }
}