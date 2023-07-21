import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Robergram</Text>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.icons}>
                    <FontAwesome5 name='heart' size='20px' color='#fff' />
                    <Ionicons name='paper-plane-outline' size='20px' color='#fff' />
                </View>

            </View>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: Dimensions.get('window').width,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 24
    },
    iconContainer: {
        width: 100,
        position: 'absolute',
        right: 0,
        top: 0,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 75,
    }

})