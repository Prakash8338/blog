import React,{useContext} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {MaterialIcons} from '@expo/vector-icons'


const ShowScreen = ({route, navigation })=>{
    const { state } = useContext(Context);
    const {id} = route.params;

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
            <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id})}>
              <MaterialIcons name="edit" size={30}/>
            </TouchableOpacity>
         )})
         })

    const blogPost = state.find((blogPost) => blogPost.id === id);
    return (
        <View>
            <Text style={styles.head}>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        width:100,
        borderBottomWidth:1,
        borderBottomColor:'rgb(44, 62, 80)',
        paddingBottom:2
    }
});


export default ShowScreen; 