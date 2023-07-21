import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import Post from './Post'

const posts = require('../post.json')

const Body = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={posts}
        renderItem={({item}) => <Post username={item.username} likes={item.likes} bio={item.bio} profile_pic={item.profile_pic} post_pic={item.post_pic} time={item.timestamp}/>}        
      />
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    }
})