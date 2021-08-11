import React from 'react'
import Slider from './Slider'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View,Text,StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const images = [
    "https://images.freeimages.com/images/small-previews/a3c/maia-2-1436576.jpg",
    "https://images.freeimages.com/images/premium/thumbs/6933/6933701-nightscape-downtown-los-angeles-with-headlights-trailing.jpg",
    "https://images.freeimages.com/images/small-previews/a5d/honeybee-1641535.jpg",
    "https://images.freeimages.com/images/small-previews/836/vessels-1641545.jpg",
    "https://images.freeimages.com/images/small-previews/405/church-of-epe-1641397.jpg"
  ]
  

export default class Home extends React.Component {
    state={
        data:[],
    }
    componentDidMount(){
        this.apiCall();
    }
    async apiCall()
    {
        // let resp = await fetch ('https://192.168.1.143/users/data/22')
        let resp = await fetch ('https://facebook.github.io/react-native/movies.json')
        let respJson = await resp.json()
        // console.warn(respJson)
        this.setState({data:respJson.movies})
    }
    render(){
        console.log('navigation', this.props.navigation)
        return (
            <View style={styles.container}>
                <LinearGradient
                    style={styles.container}
                colors={['#b41a6a', '#7c1fa1', '#b41a6a','#7c1fa1'  ]}
                start ={{x:0,y:0}}
                end ={{x:0,y:1}}
            >  
                <View style={styles.menuContainer}>
                    <Text style={{color:'#fff'}}>Home</Text>
                    <Icon name="bars" color="white" size={25} onPress={()=>{this.props.navigation.openDrawer()}}></Icon>
                </View>
                <Slider images={images}/>
                <FlatList 
                    data={this.state.data}
                    renderItem={({item})=> <Text style={{color:'#fff'}}>{item.title}</Text>}
                />
                </LinearGradient>
            </View>
        );
    }
    }
  
  const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    menuContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      padding:10,
      backgroundColor:'#b41a6a'
    },
    bgImage:{
      flex: 1,
      resizeMode: "cover",
    }
  })