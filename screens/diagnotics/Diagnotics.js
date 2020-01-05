import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraEx from './CameraEx';
import Axios from 'axios';
export default class Diagnotics extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Imagesrc: ""
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={{
                    alignItems: 'center', paddingTop: 100, paddingBottom: 100
                    , backgroundColor: '#fff', borderRadius: 10, width: 250
                }}
                    onPress={() => this.props.navigation.navigate('CameraEx')
                    }
                >
                    {this.state.Imagesrc != "" && <Image source={{uri: this.state.Imagesrc}}/>}
                    <View>
                    </View>

                    <FontAwesome
                        name="camera"
                        style={{ color: "#000", fontSize: 60 }}
                    />
                    <CameraEx />
                </TouchableOpacity>
                <View style={{ backgroundColor: '#fff', marginTop: 20, borderRadius: 10, width: 200 }}>
                    <Button
                        title="Load Image"
                        style={{ backgroundColor: '#fff' }}
                        onPress={() => {
                            console.log("click...")
                        }}
                    /></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BBEEB9',
    },
})