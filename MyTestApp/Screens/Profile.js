// Profile page 
// 18-01-2021

import React from 'react'
import {  StatusBar,StyleSheet, View, Text, ScrollView,Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { InputBox, CustomButton, CustomDatePicker } from '../Common/Common'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Radio } from '@ui-kitten/components';
import {CheckUserName, CheckEmail,CheckPhone} from '../Common/Validation'
import Home from './Home'


class Profile extends React.Component {
    state={
        userName:'',
        email:'',
        phoneNumber:'',
        dateOfBirth:'',
        gender:false,
        index:'',
        selectedIndex:'',
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
                            <InputBox 
                                inputIcon = "user-o" 
                                iconSize={20} 
                                placeholderText="Enter User Name" 
                                label="User Name"
                                onChangeText={userName => this.setState({userName: userName})}
                                value={this.state.userName}
                                onEndEditing={() => this.validateUsername()}
                                onSubmitEditing={this.onPressSignUp}
                                onFocus={() =>
                                    this.setState({
                                        userNameErr: '',
                                    })
                                }
                                onBlur={()=> this.setState({userNameErr:''})}
                                error={this.state.userNameErr}
                            />
                        </View>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox 
                                inputIcon = "envelope-o" 
                                iconSize={18} 
                                placeholderText="Enter Email" 
                                label="Email Id"
                                onChangeText={email => this.setState({email: email})}
                                value={this.state.email}
                                onEndEditing={() => this.validateEmail()}
                                onSubmitEditing={this.onPressSignUp}
                                onFocus={() =>
                                    this.setState({
                                        emailErr: '',
                                    })
                                }
                                onBlur={()=> this.setState({emailErr:''})}
                                error={this.state.emailErr}
                            />
                        </View> 
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <InputBox 
                                inputIcon = "mobile" 
                                iconSize={25} 
                                placeholderText="Mobile Number" 
                                label="Enter your 10 digit mobile number"
                                onChangeText={phoneNumber => this.setState({phoneNumber: phoneNumber})}
                                value={this.state.phoneNumber}
                                onEndEditing={() => this.validatePhoneNumber()}
                                onSubmitEditing={this.onPressSignUp}
                                onFocus={() =>
                                    this.setState({
                                        phoneNumberErr: '',
                                    })
                                }
                                onBlur={()=> this.setState({phoneNumberErr:''})}
                                error={this.state.phoneNumberErr}
                            />
                        </View>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <CustomDatePicker
                                inputIcon = "calendar" 
                                iconSize={20} 
                                placeholderText="DD/MM/YYYY" 
                                label="Date of Birth"
                                date={this.state.dateOfBirth}
                                onSelect={dateOfBirth => this.setState({dateOfBirth:dateOfBirth})}
                                error={this.state.dateOfBirthErr}
                            />
                        </View>
                        <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                            <Text style={[styles.labelText , {paddingBottom:10}]}>Gender</Text>
                            <View style={styles.row}>
                                <View style={[styles.row,{width:80}]}>
                                    <Radio
                                        checked={this.state.gender==="MALE"}
                                        onChange={gender => this.setState({gender:'MALE'})}>Male
                                    </Radio>
                                    <Radio 
                                        checked={this.state.gender==="FEMALE"}
                                        onChange={gender => this.setState({gender:'FEMALE'})}>Female
                                    </Radio>
                                </View>
                            </View>
                        </View>    
                        <View style={ {paddingTop:10, paddingBottom:50 , marginBottom:20}}> 
                            <CustomButton buttonName="SAVE" onPress={this.onPressProfile}/> 
                        </View>
                    </ScrollView>     
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
            this.setState({ userNameErr: 'Invalid username' });
            return false;
        } else return true;
    };
    validateEmail = () => {
        const emailError = CheckEmail(this.state.email);
        if (emailError === 1) {
            this.setState({ emailErr: 'Email empty' });
            return false;
        } else if (emailError === 2) {
            this.setState({ emailErr: 'Invalid username' });
            return false;
        } else return true;
    };
    validatePhoneNumber = () => {
        const phoneNumberError = CheckPhone(this.state.phoneNumber);
        if (phoneNumberError === 1) {
            this.setState({ phoneNumberErr: 'Phone number empty' });
            return false;
        } else if (phoneNumberError === 2) {
            this.setState({ phoneNumberErr: 'Invalid phone number' });
            return false;
        } else return true;
    };
    validateDateOfBirth = () => {
        const dateOfBirthError = CheckPhone(this.state.dateOfBirth);
        if (dateOfBirthError === 1) {
            this.setState({ dateOfBirthErr: 'DOB empty' });
            return false;
        } else if (dateOfBirthError === 2) {
            this.setState({ dateOfBirthErr: 'Invalid DOB' });
            return false;
        } else return true;
    }

    ValidateAll = ( ) => {
        const userNameInput = this.validateUsername();
        const emailInput = this.validateEmail();
        const phoneNumberInput = this.validatePhoneNumber();
        const dateOfBirthInput = this.validateDateOfBirth();
        // console.log('validation',userNameInput,emailInput , phoneNumberInput)
        if (userNameInput  && emailInput && phoneNumberInput && dateOfBirthInput) {
            return true;
        } else {
            return false;
        } 
    }
    onPressProfile = () => {
        const allValidation = this.ValidateAll()
        if (allValidation) {
            alert('Saved!')
            this.props.navigation.navigate('Home');   
        }        
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
