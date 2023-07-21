import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const Storie = ({is_user, pic, username, is_bf}) => {
    const url = require('../assets/icon.png')
    if(!is_user) {
        return (
            <View style={styles.container}>
                <Image style={is_bf ? styles.imgBF : styles.img} source={pic} />
                <Text style={{color: '#fff'}}>{username}</Text>
            </View>
        )
    }else{
        return (
            <View style={styles.container}>
                <Image style={is_bf ? styles.img : styles.img} source={pic} />
                <Text style={{color: '#fff'}}>Tu storie</Text>
            </View>
        )
    }
}

export default Storie

const styles = StyleSheet.create({
    img: {
        width: 66,
        height: 66,
        borderRadius: 50,
        border: '3px solid violet'
    },
    imgBF: {
        width: 66,
        height: 66,
        borderRadius: 50,
        border: '3px solid #39ff39'
    },
    container: {
        width: 80,
        marginLeft: 15,
        height: Dimensions.get('window').height / 6,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
})