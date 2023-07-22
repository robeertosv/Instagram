import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

let date = new Date;
date = date.toISOString();
let dia = date.split('T');
let hour = dia[1];
dia = dia[0];

const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
const Post = ({username, time, post_pic, likes, profile_pic, bio}) => { 
  let diapic = time.split('T')
  let hourMsg;


  let horapic = diapic[1].split(':')[0]
  hour = hour.split(':')[0]

  hour = parseInt(hour) - parseInt(horapic)

  
  if(diapic[0].split('-')[2] == dia.split('-')[2]) {
    hourMsg = 'HACE '+hour+' HORAS'
  } else {
    let a = diapic[0].split('-')[1].slice(-1) - 1
    hourMsg = `${diapic[0].split('-')[2]} de ${meses[a]}`
  }
  
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={profile_pic} style={styles.header.pic} />
        <Text style={styles.header.username}>{username}</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={post_pic} />
      </View>
      <View style={styles.footer}>
        <View style={styles.footer.icons}>
          <Feather name='heart' size={25} color={'white'}/>
          <Ionicons name='chatbubble-outline' size={25} color={'white'}/>
          <Ionicons name='paper-plane-outline' size={25} color={'white'}/>
        </View>
        <Text style={{marginLeft: 10, marginTop: 10, color: 'white'}}>{likes} Likes</Text>
        <Text style={{marginLeft: 10, marginTop: 5, color: 'white'}}>{username} {bio}</Text>
        <Text style={{marginLeft: 10, marginTop: 5, color: 'white'}}>{hourMsg}</Text>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  postContainer: {

    width: Dimensions.get('window').width,
    maxWidth: '400px',
    padding: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    pic: {
      height: 35,
      width: 35,
      borderRadius: 50,
      marginRight: 15
    },
    username: {
      color: '#fff',
      fontSize: 18
    }
  },
  content: {
    marginTop: 15
  },
  image: {
    width: Dimensions.get('window') / 1.1,
    maxWidth: '500px',
    height: '400px',
  },
  footer: {
    icons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 125,
      padding: 2,
      marginTop: 10,
    }
  }
})
