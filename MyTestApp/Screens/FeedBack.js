// Feedback page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View,  ScrollView} from 'react-native'
import { InputBox, CustomButton, HeaderContent,MessageBox } from '../Common/Common'
import {CheckUserName, CheckEmail,CheckPhone, CheckMessage} from '../Common/Validation'
class FeedBack extends React.Component {
    state={
        name:'',
        email:'',
        phoneNumber:'',
        message:'',
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <HeaderContent pageTitle="FEEDBACK FORM" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={styles.justifyCenterContainer }>
                    <InputBox 
                        inputIcon = "user-o" 
                        iconSize={20} 
                        placeholderText="Your Name" 
                        onChangeText={name => this.setState({name: name})}
                        value={this.state.name}
                        onEndEditing={() => this.validateName()}
                        onSubmitEditing={this.onPressFeedback}
                        onFocus={() =>
                            this.setState({
                                nameErr: '',
                            })
                        }
                        onBlur={()=> this.setState({nameErr:''})}
                        error={this.state.nameErr}
                    />
                </View>
                <View style={styles.justifyCenterContainer }>
                    <InputBox 
                        inputIcon = "envelope-o" 
                        iconSize={18} 
                        placeholderText="Mail Id" 
                        onChangeText={email => this.setState({email: email})}
                        value={this.state.email}
                        onEndEditing={() => this.validateEmail()}
                        onSubmitEditing={this.onPressFeedback}
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
                        placeholderText="Mobile Number" 
                        onChangeText={phoneNumber => this.setState({phoneNumber: phoneNumber})}
                        value={this.state.phoneNumber}
                        onEndEditing={() => this.validatePhoneNumber()}
                        onSubmitEditing={this.onPressFeedback}
                        onFocus={() =>
                            this.setState({
                                phoneNumberErr: '',
                            })
                        }
                        onBlur={()=> this.setState({phoneNumberErr:''})}
                        error={this.state.phoneNumberErr}
                    />
                </View>
                <View style={styles.justifyCenterContainer }>
                    <MessageBox  
                        placeholderText="Your Feedback within 400 characters" 
                        onChangeText={message => this.setState({message: message})}
                        value={this.state.message}
                        onEndEditing={() => this.validateMessage()}
                        onSubmitEditing={this.onPressFeedback}
                        onFocus={() =>
                            this.setState({
                                messageErr: '',
                            })
                        }
                        onBlur={()=> this.setState({messageErr:''})}
                        error={this.state.messageErr}
                    />
                </View>
                <View style={styles.buttonSpacing}>
                    <CustomButton buttonName="SUBMIT" onPress={this.onPressFeedback}/>
                </View>
            </ScrollView>
        )
    }
    validateName = () => {
        const nameError = CheckUserName(this.state.name);
        if (nameError === 1) {
            this.setState({ nameErr: 'Name empty' });
            return false;
        } else if (nameError === 2) {
            this.setState({ nameErr: 'Invalid name' });
            return false;
        } else return true;
    };
    validateEmail = () => {
        const emailError = CheckEmail(this.state.email);
        if (emailError === 1) {
            this.setState({ emailErr: 'Email empty' });
            return false;
        } else if (emailError === 2) {
            this.setState({ emailErr: 'Invalid email' });
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
    validateMessage = () => {
        const messageError = CheckMessage(this.state.message);
        if (messageError === 1) {
            this.setState({ messageErr: 'Message empty' });
            return false;
        } else if (messageError === 2) {
            this.setState({ messageErr: 'Invalid message' });
            return false;
        } else return true;
    };
    ValidateAll = ( ) => {
        const userNameInput = this.validateName();
        const emailInput = this.validateEmail();
        const phoneNumberInput = this.validatePhoneNumber();
        const messageInput =  this.validateMessage();
        console.log('validation',userNameInput,emailInput , phoneNumberInput, messageInput)
        if (userNameInput  && emailInput && phoneNumberInput && messageInput) {
            return true;
        } else {
            return false;
        } 
    }
    onPressFeedback = () => {
        const allValidation = this.ValidateAll()
        if (allValidation) {
            alert('FeedBack Saved!')
            this.props.navigation.navigate('Home');
        }         
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    justifyCenterContainer:{
        paddingLeft:30
    },
    buttonSpacing:{
        marginBottom:30, 
        paddingLeft:25
    },


})
export default FeedBack
