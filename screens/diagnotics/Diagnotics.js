import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button, AsyncStorage, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CameraEx from './CameraEx';
import { Overlay } from 'react-native-elements';
import Result from '../../components/Result';
import * as ImagePicker from 'expo-image-picker';
import { NavigationEvents } from 'react-navigation';
export default class Diagnotics extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: null,
            lng: null,
            lat: null,
            modalVisible: false,
            solution: null,
            link: 'https://0750fc64.ngrok.io',
            sickness: null,
            solution: null,
            phoneNumber: null,
            msg: null,
            uri: null,
        }
    }
    onClose = () => this.setState({ modalVisible: false });

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        }
    }

    componentDidMount() {
        AsyncStorage.getItem("id").then(res => {
            this.setState({
                userId: res,
                lng: this.props.navigation.getParam("lng"),
                lat: this.props.navigation.getParam("lat")
            })
        })
    }

    sendImage() {
        this.setState({
            modalVisible: true,
            uri: this.props.navigation.getParam("Imagesrc")
        })

        var item = {
            uri: this.props.navigation.getParam("Imagesrc"),
            type: 'image/jpeg',
            name: this.props.navigation.getParam("Name")
        }

        var body = new FormData()
        body.append('userId', this.state.userId);
        body.append('photo', item);
        body.append('lng', this.state.lng);
        body.append('lat', this.state.lat);

        fetch(`${this.state.link}/diaglogic`, {
            method: 'POST',
            body: body,

        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    const solution = res.solution
                    const newSolution = solution.split("\\n")
                    this.setState({
                        sickness: res.sickness,
                        solution: newSolution,
                        phoneNumber: res.Department,
                    })
                } else {
                    this.setState({
                        msg: res.mgs,
                    })
                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{
                    alignItems: 'center', paddingTop: 100, paddingBottom: 100
                    , backgroundColor: '#fff', borderRadius: 10, width: 250
                }}
                    onPress={() => {
                        this.setState({
                            sickness: null,
                            msg: null,
                            uri : null
                        })
                        this.props.navigation.navigate('CameraEx')
                    }}>

                    <FontAwesome
                        name="camera"
                        style={{ color: "#000", fontSize: 60 }}
                    />
                    <CameraEx />

                </TouchableOpacity>
                <View style={{ marginTop: 20, borderRadius: 10, width: 200 }}>
                    <TouchableOpacity
                    activeOpacity= {0.8}
                    onPress={async () => {
                        
                        this.setState({
                            msg: null,
                            sickness: null,
                            uri: null
                        })
                        const result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.All,
                            allowsEditing: true,
                            aspect: [4, 3],
                            quality: 1
                        })

                        var name = result.uri.split("ImagePicker/")[1]

                        this.setState({
                            modalVisible: true,
                            uri: result.uri
                        })

                        var item = {
                            uri: this.state.uri,
                            type: 'image/jpeg',
                            name: name
                        }

                        var body = new FormData()
                        body.append('userId', this.state.userId);
                        body.append('photo', item);
                        body.append('lng', this.state.lng);
                        body.append('lat', this.state.lat);


                        fetch(`${this.state.link}/diaglogic`, {
                            method: 'POST',
                            body: body,

                        }).then(res => res.json())
                            .then(res => {
                                //  console.log(res)
                                if (res.success) {
                                    const solution = res.solution
                                    const newSolution = solution.split("\\n")
                                    this.setState({
                                        solution: newSolution,
                                        sickness: res.sickness,
                                        phoneNumber: res.Department,
                                    })
                                } else {
                                    this.setState({
                                        msg: res.mgs,
                                    })
                                }
                            })
                    }}>
                        <Text style={styles.gui}>Chọn ảnh</Text>
                        
                        
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={this.sendImage.bind(this)}>
                        <Text style={styles.gui}> Gửi </Text>
                        
                    </TouchableOpacity>
                    <Overlay isVisible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside
                        animationType="zoomIn" containerStyle={{ backgroundColor: 'rgba(37, 8, 10, 0.78)' }}
                        childrenWrapperStyle={{ backgroundColor: '#eee' }}
                        animationDuration={500}>

                        <Text onPress={() => {
                            this.setState({
                                modalVisible: false,
                            })
                        }} style={{ color: '#c1c1c1', marginLeft: 'auto', fontSize: 32, marginTop: 0 }}
                         >x</Text>
                          
                        <Image style={{width: 100, height: 100,marginLeft: 115}}
                        source={{uri: this.state.uri}}
                        /> 
                        
                        {
                            this.state.sickness ? <Result info={{ sickeness: this.state.sickness, solution: this.state.solution, phoneNumber: this.state.phoneNumber }} />
                                : this.state.msg ? <Text style={styles.text}>{this.state.msg}</Text>
                                    : <Text style={{textAlign: 'center'}}>Xin chờ trong giây lát...</Text>
                        }

                    </Overlay>
                </View>
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
    text: {
        textAlign: 'center'
    },
    gui: {
        padding: 10,
        margin: 10,
        textAlign: "center",
        backgroundColor: '#78f',
        borderRadius: 10,
        fontSize: 22,
        color: '#fff'


    }

})