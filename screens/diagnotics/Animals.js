import React from 'react'
import { View, Text, StyleSheet, Image, Alert, Platform } from 'react-native'
import conga from '../../assets/conga.jpg'
import AnimalButton from '../../components/AnimalButton'

export default class Animals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: [
                { id: 1, title: "Chicken", Image: conga },
            ],
            longitude: 0,
            latitude: 0

        };
    }
    render() {
        const { navigation } = this.props;
        const { animals } = this.state;
        return (
            <View style={styles.container}>
                {animals.map(animal => (<AnimalButton key={animal.id} animal={animal}
                    onPress={() =>
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                this.setState({
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude,
                                    error: null,
                                });

                                // mở camera
                                navigation.navigate('Diagnotics', {
                                    title: animal.title,
                                    id: animal.id,
                                    lng: this.state.longitude.toString(),
                                    lat: this.state.latitude.toString(),

                                })

                                   
                            },
                            error => Alert.alert('Error:', error.message),
                            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                        )
                    }

                />))}

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BBEEB9",
        height: 1000,

    }
})
