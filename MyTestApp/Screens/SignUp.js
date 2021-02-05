// sign up page 
// 13-01-2021

import React from 'react'
import {  StyleSheet, View,ScrollView} from 'react-native'
import { InputBox, CustomButton, HeaderContent } from '../Common/Common'
import {CheckUserName, CheckEmail,CheckPhone,CheckPassword} from '../Common/Validation'
class SignUp extends React.Component {
    state={
        userName:'',
        email:'',
        phoneNumber:'',
        password:'',
        confirmPassword:'',
        passwordSecure:true,
        confirmPasswordSecure:true
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <HeaderContent pageTitle="Sign Up" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={[styles.justifyCenterContainer , {paddingTop:20}]}>
                    <InputBox 
                        inputIcon = "user-o" 
                        iconSize={20} 
                        placeholderText="Enter user name" 
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
                 <View style={styles.justifyCenterContainer}>
                    <InputBox 
                        inputIcon = "envelope-o" 
                        iconSize={18} 
                        placeholderText="Enter email id" 
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
                 <View style={styles.justifyCenterContainer}>
                    <InputBox 
                        inputIcon = "mobile" 
                        iconSize={25} 
                        placeholderText="Enter your 10 digit mobile number" 
                        label="Mobile Number"
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
                <View style={styles.justifyCenterContainer}>
                    <InputBox 
                        inputIcon = "lock" 
                        iconSize={20} 
                        placeholderText="Password  8-15 characters" 
                        label="Password"
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
                <View style={styles.justifyCenterContainer}>
                    <InputBox 
                        inputIcon = "lock" 
                        iconSize={20} 
                        placeholderText="Repeat the password" 
                        label="Confirm Password"
                        secureTextEntry={this.state.confirmPasswordSecure}
                        iconRight = {this.state.confirmPasswordSecure ? "eye-slash":'eye'}
                        value={this.state.confirmPassword}
                        onChangeText={confirmPassword => this.setState({confirmPassword: confirmPassword})}
                        onEndEditing={() => this.validateConfirmPassword()}
                        onSubmitEditing={this.onPressSignUp}
                        onFocus={() =>
                            this.setState({
                                confirmPasswordErr: '',
                            })
                        }
                        iconRightFunction={() =>
                            this.setState({
                                confirmPasswordSecure: !this.state
                                    .confirmPasswordSecure
                            })
                        }
                        onBlur={()=> this.setState({confirmPasswordErr:''})}
                        error={this.state.confirmPasswordErr}
                        />
                </View>
                <View style={styles.buttonSpacing}>
                    <CustomButton buttonName="SIGN UP" onPress={this.onPressSignUp}/>
                </View>
            </ScrollView>
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


    validatePassword = () => {
        const passwordError = CheckPassword(this.state.password);
        if (passwordError === 1) {
            this.setState({ passwordErr: 'Password empty' });
            return false;
        } else if (passwordError === 2) {
            this.setState({ passwordErr: 'Invalid password' });
            return false;
        } else return true;
    };
    validateConfirmPassword = () => {
        const confirmPasswordError = CheckPassword(this.state.confirmPassword);
        if (confirmPasswordError === 1) {
            this.setState({
                confirmPasswordErr: 'Empty confirm password'
            });
            return false;
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                confirmPasswordErr: 'Confirm password is not same as password'
            });
            return false;
        }
        return true;
    };
    ValidateAll = ( ) => {
        const userNameInput = this.validateUsername();
        const emailInput = this.validateEmail();
        const phoneNumberInput = this.validatePhoneNumber();
        const passwordInput = this.validatePassword();
        const confirmPasswordInput = this.validateConfirmPassword();
        // console.log('validation',userNameInput,emailInput , phoneNumberInput ,  passwordInput , confirmPasswordInput)
        if (userNameInput  && emailInput && phoneNumberInput &&  passwordInput && confirmPasswordInput) {
            return true;
        } else {
            return false;
        } 
    }
    onPressSignUp = () => {
        const allValidation = this.ValidateAll()
        if (allValidation) {
            let url="http://192.168.2.61:3003/users";
            const requestBody = {
                    user_name:this.state.userName,
                    email:this.state.email,
                    phone_number:this.state.phoneNumber,
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
                console.log(response)
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
            alert('User account created successfully!')
            this.props.navigation.navigate('Home');  
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    buttonSpacing:{
        marginBottom:20, 
        paddingLeft:30
    },
    justifyCenterContainer:{
        flex:1,
        paddingLeft:35
    },
})
export default SignUp
