// Profile page 
// 18-01-2021

import React from 'react'
import {  StatusBar,StyleSheet, View, Text,Switch, ScrollView,Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { InputBox, CustomButton } from '../Common/Common'
import Icon from 'react-native-vector-icons/FontAwesome'

class Profile extends React.Component {
    state={
        female:true,
        male:true,
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <LinearGradient
                    style={[styles.logoContainer]}
                    colors={['#b41a6a', '#7c1fa1' , ]}
                    start ={{x:0,y:0}}
                    end ={{x:0,y:1}}
                >  
                    <View style={[styles.alignCenter,{ marginTop:20}]}> 
                        <View style={styles.row}>      
                            <Image
                                style={styles.picContainer}
                                source={require('../images/img.jpeg')}
                            /> 
                            <TouchableOpacity>
                                <View style={[styles.iconContainer, styles.imageIconContainer]}>
                                    <Icon name="image" size={14} color="black"  />
                                </View> 
                            </TouchableOpacity>
                        </View> 
                        <View style={styles.row}>
                            <Text style={styles.logoTextStyle}>{this.state.userName ? 'Anbu':'Anbu David'}</Text>
                            <TouchableOpacity>
                                <View style={styles.iconContainer}>
                                    <Icon name="edit" size={15} color="black"  />
                                </View>  
                            </TouchableOpacity>  
                        </View>
                    </View>
                    <ScrollView style={styles.contentContainer}>
                        <Text style={styles.pageTitleText}>USER PROFILE</Text>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox inputIcon = "user-o" iconSize={20} placeholderText="Enter User Name" label="User Name"/>
                        </View>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox inputIcon = "envelope-o" iconSize={18} placeholderText="Enter Email" label="Email Id"/>
                        </View> 
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox inputIcon = "mobile" iconSize={25} placeholderText="Mobile Number" label="Enter your 10 digit mobile number"/>
                        </View>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox inputIcon = "calendar" iconSize={20} placeholderText="DD/MM/YYYY" label="Date of Birth"/>
                        </View>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <Text style={[styles.labelText , {paddingBottom:10}]}>Sex</Text>
                            <View style={styles.row}>
                                <View style={[styles.row,{width:80}]}>
                                    <View>
                                        <Switch
                                            trackColor={{ false: "#7c1fa1", true: "#eee" }}
                                            thumbColor={this.state.male ? "#7c1fa1" : "#eee"}
                                            onValueChange={(male) => this.setState({male})}
                                            value={this.state.male}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.switchText}>Male</Text>
                                    </View>
                                </View>
                                <View style={ [styles.row,{ width:80}]}>
                                    <Switch
                                        trackColor={{ false: "#7c1fa1", true: "#eee" }}
                                        thumbColor={this.state.female ? "#7c1fa1" : "#eee"}
                                        onValueChange={(female) => this.setState({female})}
                                        value={this.state.female}
                                    />
                                    <View>
                                        <Text style={styles.switchText}>Female</Text>
                                    </View>
                                </View>
                            </View>
                        </View>    
                        <View style={ {paddingTop:10, paddingBottom:50 , marginBottom:20}}> 
                            <CustomButton buttonName="SAVE" onPress={() => alert('Saved!')}/> 
                        </View>
                    </ScrollView>     
                </LinearGradient>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#eeeeff'
    },
    logoContainer: {
        height:250,
    },
    logoStyle:{		
        height:50,
        width:50,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    alignCenter: {
        justifyContent:'center',
        alignItems:'center'
    }, 
    logoTextStyle: {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        paddingTop:20
    },
    contentContainer: {
        flex:1,
        width:370,
        position:'absolute',
        top:200,
        left:22.5,
        height:525,
        backgroundColor:'#fff'
    },
    pageTitleText: {
        fontWeight:'bold',
        fontSize:22,
        paddingTop:20,
        textAlign:'center'
    },
    justifyCenterContainer:{
        paddingLeft:15
    },
    textColor:{
        color:'#c203fc'
    },
    textRight:{
        textAlign:'right'
    },
    rowDirection:{
        flexDirection:'row'
    },
    textCenter:{
        textAlign:'center',
        color:'grey',
        fontSize:16
    },
    justifyContent:{
        justifyContent:'center'
    },
    labelText: {
        color:'#c203fc',
        marginLeft:5,
    },
    row:{
        flexDirection:'row'
    },
    switchText:{
        color:'grey',
        paddingTop:5
    },
    picContainer:{
        borderRadius:45,
        width:90,
        height:90
    },
    iconContainer:{
        width:35,
        height:35,
        borderRadius:20,
        padding:10,
        backgroundColor:'white',
        marginLeft:10,
        marginTop:14
    },
    imageIconContainer:{
        position:'absolute',
        top:-15,
        left:-22

    }
    
})
export default Profile
