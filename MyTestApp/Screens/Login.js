// Login page 
// 07-01-2021

import React from 'react'
import {  StatusBar,StyleSheet, View, Text,ActivityIndicator} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { InputBox, CustomButton } from '../Common/Common'
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {CheckUserName,CheckPassword} from '../Common/Validation'

const userInfo ={userName: "Anbu@gmail.com", password: "Anbu1@Kani"}

class Login extends React.Component {
    state={
        userName:'',
        password:'',
        userNameErr:'',
        passwordSecure:true,
        rememberMe:true,
        isAuthenticated:false,
        resData:''

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
                        <Text style={styles.logoTextStyle}>F R E E D O M</Text>
                    </View>
                    <View style={[styles.contentContainer]}>
                        <Text style={styles.pageTitleText}>SIGN IN</Text>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox 
                                inputIcon = "user-o" 
                                iconSize={20} 
                                placeholderText="User Name"
                                onChangeText={userName => this.setState({userName: userName})}
                                value={this.state.userName}
                                onEndEditing={() => this.validateUsername()}
                                onSubmitEditing={this.onPressLogin}
                                onFocus={() =>
                                    this.setState({
                                        userNameErr: '',
                                    })
                                }
                                onBlur={()=> this.setState({userNameErr:''})}
                                error={this.state.userNameErr}   
                            />
                        </View>
                        <View style={styles.justifyCenterContainer}>
                            <InputBox 
                                inputIcon = "lock" 
                                iconSize={20} 
                                placeholderText="Password"
                                secureTextEntry={this.state.passwordSecure}
                                iconRight = {this.state.passwordSecure ? "eye-slash":'eye'}
                                value={this.state.password}
                                onChangeText={password => this.setState({password: password})}
                                onEndEditing={() => this.validatePassword()}
                                onSubmitEditing={this.onPressLogin}
                                onFocus={() =>
                                    this.setState({
                                        passwordErr: '',
                                    })
                                }
                                iconRightFunction={() =>
                                    this.setState({
                                        passwordSecure: !this.state
                                            .passwordSecure
                                    })
                                }
                                onBlur={()=> this.setState({passwordErr:''})}
                                error={this.state.passwordErr}   
                            />
                        </View> 
                        <View style={{flexDirection:'row'}}>
                            <CheckBox
                                style={{backgroundColor:'white', borderWidth:0 }}
                                title='Remember'
                                checked={this.state.rememberMe}
                                onPress={() => this.setState({rememberMe: !this.state.rememberMe})}  
                            />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                <Text style={[styles.textColor , { paddingTop:20, paddingLeft:50}]}>Forgot Password</Text> 
                            </TouchableOpacity> 
                        </View>   
                        <CustomButton buttonName="SIGN IN" onPress={this.onPressLogin}/>
                        <View style={[styles.rowDirection , styles.textCenter, styles.justifyContent ,{ paddingTop:15 }]}>
                            <Text style={styles.textCenter}>Still not connected ? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles.textColor} >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.alignCenter,styles.rowDirection]}>
                            <View style={styles.bar}></View>
                            <View style={[ styles.justifyContent ,styles.circleText,{ marginTop:10 }]}>
                                <Text style={styles.textCenter}>Or</Text>
                            </View>
                            <View style={styles.bar}></View>
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
                </LinearGradient>
            </View>
        )
    }
    validateUsername = () => {
        const usernameError = CheckUserName(this.state.userName);
        if (usernameError === 1) {
            this.setState({ userNameErr: 'Username empty' });
            return false;
        } else if (usernameError === 2) {
            this.setState({ userNameErr: 'Invalid user name' });
            return false;
        } else return true;
    };
    validatePassword = () => {
        const passwordError = CheckPassword(this.state.password);
        if (passwordError === 1) {
            this.setState({ passwordErr: 'Password Empty' });
            return false;
        } else if (passwordError === 2) {
            this.setState({ passwordErr: 'Invalid password' });
            return false;
        } else return true;
    };
    ValidateAll = ( ) => {
        const userNameInput = this.validateUsername();
        const passwordInput = this.validatePassword();
        console.log('validation',userNameInput,  passwordInput )
        if (userNameInput  && passwordInput) {
            return true;
		} else {
            return false;   
        }
    }
    
    onPressLogin = () => {
        console.log('valida')
        const allValidation = this.ValidateAll()
        if (allValidation) {
            let url="http://192.168.2.61:3003/users/login";
            const requestBody = {
                    user_name:this.state.userName,
                    password:this.state.password
            }
            const requestOptions = {
                method: 'POST',
                headers: {Accept: "application/json","Content-Type": "application/json"},
                body: JSON.stringify(requestBody)
            };
            console.log("HERE 2", requestOptions);
            fetch(url, requestOptions)
            .then(response => {
                console.log("HERE");
                return response.json();
            })
            .then(data => {
                console.log("HERE 1");
                console.log("res => ", data);
            }).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                    // ADD THIS THROW error
                    throw error;
            });
            
        }
        alert('User logged in successfully!')
        this.props.navigation.navigate('Home');
        
                
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
    },
    bar:{
        borderBottomWidth:1,
        borderBottomColor:'#c203fc',
        width:30,
        marginRight:10,
        marginLeft:10,
        padding:5
    }
})
export default Login
