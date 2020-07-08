import React,{useContext,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {MaterialIcons} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'

const indexScreen = ({navigation}) =>{
    const {state,deleteBlogPost,getBlogPost} = useContext(Context);

    useEffect (()=>{
        getBlogPost();

        navigation.addListener('didFocus',()=>{
            getBlogPost();
        });

        return () =>{
            listener.remove()
        }
    },[])

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
            <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
              <Feather name="plus" size={30} color='white'/>
            </TouchableOpacity>
         )})
         })

    return(<View style={styles.bk}>
        <FlatList data={state}
           keyExtractor={(blogPost) => blogPost.title}
           renderItem={({item}) =>{
              return(<TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})}>
                     <View style={styles.row}>
                       <Text style={styles.title}>{item.title}-{item.id}</Text>
                       <TouchableOpacity onPress={() => deleteBlogPost(item.id) }>
                            <MaterialIcons style={styles.icon} name="delete"/>
                       </TouchableOpacity>
                     </View>
                  </TouchableOpacity>
              )
                }}>
        </FlatList>
    </View>);
};

const styles = StyleSheet.create({
    bk:{
        backgroundColor:'black',
        
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderWidth:(0,0.8),
        borderColor:'gray'
    },
    title:{
        fontSize:18,
        color:'#fff'
    },
    icon:{
        fontSize:28,
        color:'#fff'
    }
});

export default indexScreen;