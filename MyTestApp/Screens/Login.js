// Login page 
// 07-01-2021

import React from 'react'
import {  StatusBar,StyleSheet, View, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { InputBox, CustomButton } from '../Common/Common'
import CheckBox from 'react-native-check-box'
import { ClippingRectangle } from '@react-native-community/art'
class Login extends React.Component {
    state={
        isChecked:true,
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <LinearGradient
                    style={styles.logoContainer}
                    colors={['#fc03df', '#c203fc',  ]}
                    start ={{x:0,y:0}}
                    end ={{x:1,y:1}}
                >         
                    <View style={styles.alignCenter}>         
                        <Icon name="connectdevelop" size={45} color="white" />
                        <Text style={styles.logoTextStyle}>F R E E D O M</Text>
                    </View>
                    <View style={[styles.contentContainer]}>
                        <Text style={styles.pageTitleText}>SIGN IN</Text>
                        <View style={styles.justifyCenterContainer}>
                            <InputBox inputIcon = "user-o" placeholderText="User Name"/>
                        </View>
                        <View style={styles.justifyCenterContainer}>
                            <InputBox inputIcon = "lock" placeholderText="Password"/>
                        </View> 
                        <View style={{flexDirection:'row' , paddingTop:20}}>
                            <View style={{ width:215 }}>
                                <CheckBox
                                    style={{paddingLeft: 20, }}
                                    onClick={()=>{
                                    this.setState({
                                        isChecked:!this.state.isChecked
                                    })
                                    }}
                                    isChecked={this.state.isChecked}
                                    rightText="Remember"
                                />  
                            </View>
                            <Text style={styles.textColor}>Forgot Password</Text>  
                        </View>   
                        <CustomButton buttonName="SIGN IN"/>
                        <View style={[styles.rowDirection , styles.textCenter, styles.justifyContent ,{ paddingTop:15 }]}>
                            <Text style={styles.textCenter}>Still not connected ? </Text>
                            <Text style={styles.textColor}>Sign Up</Text>
                        </View>
                        <View style={styles.alignCenter}>
                            <View style={[ styles.justifyContent ,styles.circleText,{ marginTop:10 }]}>
                                <Text style={styles.textCenter}>Or</Text>
                            </View>
                            <View style={[styles.rowDirection , styles.textCenter, styles.justifyContent ,{ paddingTop:15 }]}>
                                <View style={[styles.faceBook, styles.textCenter]}>
                                    <Icon name="facebook-f" size={25} color="white" />
                                </View>
                                <View style={[styles.twitter, styles.textCenter]}>
                                    <Icon name="twitter" size={25} color="white" />
                                </View>
                            </View>
                        </View>

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
        paddingTop:30,
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
    circleText: {
        width:40,
        height:40,
        borderWidth:1,
        borderRadius:20,
        borderColor:'#c203fc'
    },
    faceBook:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#3b65d9',
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
        
    },
    twitter:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#03f8fc',
        justifyContent:'center',
        alignItems:'center'
    }


})
export default Login
