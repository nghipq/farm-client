import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button, AsyncStorage} from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import CameraEx from './CameraEx';
export default class Diagnotics extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Imagesrc: "", 
            lng: null, 
            lat: null
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        }
    }
componentDidMount (){
    this.setState({
        lng: this.props.navigation.getParam("lng"),
        lat: this.props.navigation.getParam("lat")
    })
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
                            var item = {
                                uri: this.props.navigation.getParam("Imagesrc"),
                                type: 'image/jpeg',
                                name: this.props.navigation.getParam("Name")
                            }
                            
                            var body = new FormData()
                            body.append('authToken', 'secret');
                            body.append('photo', item);
                            body.append('title', 'A beautiful photo!');

                            fetch('https://bb8b1dfd.ngrok.io/diaglogic', {
                                method: 'POST',
                                body: body
                            }).then(res => res.json())
                            .then(res => console.log(res))
                            console.log(this.state.lng, this.state.lat)

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