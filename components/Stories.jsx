import { Dimensions, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Storie from './Storie'


const stories = require('../stories.json')
const data = []

stories.map((item, key) => {
    data.push(item)
})

const Stories = () => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.list}>
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => <Storie is_bf={item.is_bf} is_user={item.is_user} pic={item.pic} username={item.username} />}
                />
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: Dimensions.get('window').height / 6,
        overflow: 'hidden',
        zIndex: 1
    },
})