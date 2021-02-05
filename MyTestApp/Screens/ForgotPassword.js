// Forgot Password page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View, Text} from 'react-native'
import { InputBox, CustomButton, HeaderContent } from '../Common/Common'
import {CheckEmail} from '../Common/Validation'
class ForgotPassword extends React.Component {
    state={
        email:'',
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderContent pageTitle="FORGOT PASSWORD" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={styles.justifyCenterContainer}>
                    <InputBox 
                        inputIcon = "envelope-o" 
                        iconSize={18} 
                        placeholderText="Enter email id"
                        onChangeText={email => this.setState({email: email})}
                        value={this.state.email}
                        onEndEditing={() => this.validateEmail()}
                        onSubmitEditing={this.onPressForgetPassword}
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
                    <CustomButton buttonName="SUBMIT" onPress={this.onPressForgetPassword }/>
                </View>
            </View>
        )
    }
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

    onPressForgetPassword = () => {
        const allValidation = this.validateEmail()
        if (allValidation) {
            alert('Changed Password!')
            this.props.navigation.navigate('Home');
        }        
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    justifyCenterContainer:{
        paddingTop:10, 
        paddingLeft:30
    }


})
export default ForgotPassword
