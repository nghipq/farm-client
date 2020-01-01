import React from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'
import conga from '../../assets/conga.jpg'
import AnimalButton from '../../components/AnimalButton'
import Diagnotics from './Diagnotics';

export default class Animals extends React.Component {
    constructor (props){
        super(props);

        this.state= {
            animals: [
                {id: 1, title: 'Chicken', Image: conga},
            ]
        }
    }
render(){
    const { navigation } = this.props;
    const {animals} = this.state;
    return(
        <View style={styles.container}>
            {animals.map(animal => ( <AnimalButton key = {animal.id} animal={animal} 
                onPress={() => navigation.navigate('Diagnotics', {
                    title: animal.title,
                    id: animal.id
                }) }
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