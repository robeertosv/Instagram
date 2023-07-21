import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Foundation, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'

const photo = require('../post.json')
const Footer = () => {
    return (
        <View style={styles.container}>
            <Foundation name='home' style={styles.icon} size={30} />
            <Ionicons name='search' style={styles.icon} size={30} />
            <FontAwesome name='plus-square-o' style={styles.icon} size={30} />
            <MaterialIcons name='movie-filter' style={styles.icon} size={30} />
            <Image source={photo[0].profile_pic} style={styles.image} />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
    icon: {
        color: '#fff',
        margin: 0
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 50
    }
})