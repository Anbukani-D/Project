// Profile page 
// 18-01-2021

import React from 'react'
import {  StatusBar,StyleSheet, View, Text,Switch} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { InputBox, CustomButton } from '../Common/Common'
import { CheckBox } from 'react-native-elements'

class Profile extends React.Component {
    state={
        isChecked:true,
        isEnabled:true,
        toggleSwitch:true
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <LinearGradient
                    style={styles.logoContainer}
                    colors={['#b41a6a', '#7c1fa1' , ]}
                    start ={{x:0,y:0}}
                    end ={{x:0,y:1}}
                >         
                    <View style={[styles.alignCenter,{ marginTop:70}]}>         
                        <Icon name="connectdevelop" size={45} color="white" />  
                        <Text style={styles.logoTextStyle}>{this.state.userName?'Anbu':'Anbu David'}</Text>
                    </View>
                    <View style={[styles.contentContainer]}>
                        <Text style={styles.pageTitleText}>USER PROFILE</Text>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox inputIcon = "user-o" iconSize={20} placeholderText="Enter User Name" label="User Name"/>
                        </View>
                        <View style={styles.justifyCenterContainer}>
                            <InputBox inputIcon = "envelope-o" iconSize={18} placeholderText="Enter Email" label="Email Id"/>
                        </View> 
                        <View style={styles.justifyCenterContainer}>
                            <InputBox inputIcon = "mobile" iconSize={20} placeholderText="Mobile Number" label="Enter your 10 digit mobile number"/>
                        </View>
                        <View style={styles.justifyCenterContainer}>
                            <InputBox inputIcon = "lock" iconSize={20} placeholderText="DD/MM/YYYY" label="Date of Birth"/>
                        </View>
                        <View style={styles.justifyCenterContainer}>
                            <Text style={[styles.labelText , {paddingBottom:10}]}>Sex</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                onValueChange={()=>this.setState(isEnabled)}
                                value={this.state.isEnabled}
                            />

                        </View>    

                        <CustomButton buttonName="SAVE" onPress={() => this.props.navigation.navigate('Profile')}/>   
                    </View>     
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
    
})
export default Profile
