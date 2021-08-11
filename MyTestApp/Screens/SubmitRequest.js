// Submit Request page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View, Text, ScrollView} from 'react-native'
import { InputField, CustomButton, HeaderContent,MessageBox } from '../Common/Common'
import {CheckUserName, CheckEmail,CheckPhone, CheckMessage} from '../Common/Validation'
class SubmitRequest extends React.Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        subject:'',
        message:'',
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <HeaderContent pageTitle="SUBMIT REQUEST" headerContent="Lorem Ipsum is simply dummy text for printing any type setting industry."/>
                <View style={styles.justifyCenterContainer}>
                    <InputField 
                        placeholderText="Enter your First Name" 
                        label="First Name"
                        onChangeText={firstName => this.setState({firstName: firstName})}
                        value={this.state.firstName}
                        onEndEditing={() => this.validateFirstName()}
                        onSubmitEditing={this.onPressSubmitRequest}
                        onFocus={() =>
                            this.setState({
                                firstNameErr: '',
                            })
                        }
                        onBlur={()=> this.setState({firstNameErr:''})}
                        error={this.state.firstNameErr}    
                    />
                </View>
                <View style={styles.justifyCenterContainer}>
                    <InputField 
                        placeholderText="Enter your Last Name" 
                        label="Last Name"
                        onChangeText={lastName => this.setState({lastName: lastName})}
                        value={this.state.lastName}
                        onEndEditing={() => this.validateLastName()}
                        onSubmitEditing={this.onPressSubmitRequest}
                        onFocus={() =>
                            this.setState({
                                lastNameErr: '',
                            })
                        }
                        onBlur={()=> this.setState({lastNameErr:''})}
                        error={this.state.lastNameErr} 
                    />
                </View>
                <View style={styles.justifyCenterContainer}>
                    <InputField 
                        placeholderText="Enter your Email Id" 
                        label="Email Id" 
                        onChangeText={email => this.setState({email: email})}
                        value={this.state.email}
                        onEndEditing={() => this.validateEmail()}
                        onSubmitEditing={this.onPressSubmitRequest}
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
                    <InputField 
                        placeholderText="Enter your 10 digit mobile number" 
                        label="Mobile Number"
                        onChangeText={phoneNumber => this.setState({phoneNumber: phoneNumber})}
                        value={this.state.phoneNumber}
                        onEndEditing={() => this.validatePhoneNumber()}
                        onSubmitEditing={this.onPressSubmitRequest}
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
                    <InputField 
                        placeholderText="Enter the subject" 
                        label="Subject"
                        onChangeText={subject => this.setState({subject: subject})}
                        value={this.state.subject}
                        onEndEditing={() => this.validateSubject()}
                        onSubjectEditing={this.onPressSubmitRequest}
                        onFocus={() =>
                            this.setState({
                                subjectErr: '',
                            })
                        }
                        onBlur={()=> this.setState({subjectErr:''})}
                        error={this.state.subjectErr} 
                    />
                </View> 
                <View style={styles.justifyCenterContainer}>
                    <MessageBox  
                        placeholderText="Enter your message within 400 characters" 
                        label="Message"
                        onChangeText={message => this.setState({message: message})}
                        value={this.state.message}
                        onEndEditing={() => this.validateMessage()}
                        onSubmitEditing={this.onPressSubmitRequest}
                        onFocus={() =>
                            this.setState({
                                messageErr: '',
                            })
                        }
                        onBlur={()=> this.setState({messageErr:''})}
                        error={this.state.messageErr}
                     />
                    <Text style={{fontSize:12,color:'grey'}}>Please verify your entered details before submitting</Text>
                </View>
                <View style={styles.justifyCenterContainer}>
                    <View style={[styles.fileUploadContainer]}>
                        <Text style={{color:'#c203fc'}}>Add or Drag and Drop</Text>
                        <Text style={{color:'grey'}}> your files here</Text>
                    </View>
                    <Text style={{fontSize:12,color:'grey'}}>Word, Excel, PDF, JPEG and PNG are accepted. </Text>
                    <Text style={{fontSize:12,color:'grey'}}>File size should be within 10 mb </Text>
                </View>
                <View style={styles.buttonSpacing}>
                    <CustomButton buttonName="SUBMIT" onPress={this.onPressSubmitRequest}/>
                </View>
            </ScrollView> 
        )
    }
    validateFirstName = () => {
        const firstNameError = CheckUserName(this.state.firstName);
        if (firstNameError === 1) {
            this.setState({ firstNameErr: 'First name empty' });
            return false;
        } else if (firstNameError === 2) {
            this.setState({ firstNameErr: 'Invalid first name' });
            return false;
        } else return true;
    };

    validateLastName = () => {
        const lastNameError = CheckUserName(this.state.lastName);
        if (lastNameError === 1) {
            this.setState({ lastNameErr: 'Last name empty' });
            return false;
        } else if (lastNameError === 2) {
            this.setState({ lastNameErr: 'Invalid last name' });
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
    validateSubject = () => {
        const subjectError = CheckUserName(this.state.subject);
        if (subjectError === 1) {
            this.setState({ subjectErr: 'Subject empty' });
            return false;
        } else if (subjectError === 2) {
            this.setState({ subjectErr: 'Invalid subject' });
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
        const firstNameInput = this.validateFirstName();
        const lastNameInput = this.validateLastName();
        const emailInput = this.validateEmail();
        const phoneNumberInput = this.validatePhoneNumber();
        const subjectInput =  this.validateMessage();
        const messageInput =  this.validateSubject();
        console.log('validation',firstNameInput, lastNameInput, emailInput , phoneNumberInput, subjectInput, messageInput)
        if (firstNameInput && lastNameInput  && emailInput && phoneNumberInput && subjectInput && messageInput  ) {
            return true;
        } else {
            return false;
        } 
    }

    onPressSubmitRequest= () => {
        const allValidation = this.ValidateAll()
        if (allValidation) {
            alert('Request Saved!')
            this.props.navigation.navigate('Home');
        }         
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    fileUploadContainer: {
        flexDirection: 'row',
        width:340,
        height:75,   
        borderRadius:30,
        borderColor:'grey',
        borderWidth:1,
        padding:28
    },
    justifyCenterContainer:{
        paddingTop:10, 
        paddingLeft:35
    },
    buttonSpacing:{
        marginBottom:20, 
        paddingLeft:30
    },
})
export default SubmitRequest
