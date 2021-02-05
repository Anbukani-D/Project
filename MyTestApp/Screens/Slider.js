// Profile page 
// 18-01-2021

import React from 'react'
import {  StatusBar,StyleSheet, View, Text,Switch, ScrollView,Image, TouchableOpacity,Dimensions} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width;    
class Slider extends React.Component {
    scrollRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            selectedIndex:0
        }
    }

    componentDidMount = async() => {
        setInterval(() => {
            this.setState(prev => ({ selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 :prev.selectedIndex+1}), 
            () =>{
                this.scrollRef.current.scrollTo({
                    animated:true,
                    y:0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                });
            })
        },3000)
    }
    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex});
    }
    
    render() {
        const {images} = this.props
        const {selectedIndex} = this.state
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <ScrollView 
                    horizontal 
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref = {this.scrollRef}
                >
                    {images.map(image =>(
                        <Image
                            key ={image}
                            source={{uri:image}}
                            style={styles.sliderImage}
                        />))}
                </ScrollView>
                <View style={styles.circleDiv}>
                {images.map((image, i) =>(
                <View 
                    key={image}
                    style={[styles.whiteCircle,{opacity: i === selectedIndex ? 0.5 : 1}]}
                />

                ))}

                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
       height:'35%',
       width:'100%'
    },
    sliderImage:{
        height:'100%',
        width:DEVICE_WIDTH
    },
    circleDiv:{
        position:'absolute',
        bottom:15,
        height:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    whiteCircle:{
        width:6,
        height:6,
        borderRadius:3,
        margin:5,
        backgroundColor:'#fff'
    }
    
})
export default Slider
