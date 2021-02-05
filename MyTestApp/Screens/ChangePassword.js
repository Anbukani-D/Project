// Change Password page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View, Text} from 'react-native'
import { InputBox, CustomButton, HeaderContent } from '../Common/Common'
import {CheckPassword} from '../Common/Validation'
class ChangePassword extends React.Component {
    state={
        oldPasswordSecure:true,
        oldPassword:'',
        newPasswordSecure:true,
        newPassword:'',
        confirmPasswordSecure:true,
        confirmPassword:''
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderContent pageTitle="CHANGE PASSWORD" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox 
                        inputIcon = "lock" 
                        iconSize={20} 
                        placeholderText="Enter Old Password"
                        secureTextEntry={this.state.oldPasswordSecure}
                        iconRight = {this.state.oldPasswordSecure ? "eye-slash":'eye'}
                        value={this.state.oldPassword}
                        onChangeText={oldPassword => this.setState({oldPassword: oldPassword})}
                        onEndEditing={() => this.validateOldPassword()}
                        onSubmitEditing={this.onPressChangePassword}
                        onFocus={() =>
                            this.setState({
                                oldPasswordErr: '',
                            })
                        }
                        iconRightFunction={() =>
                            this.setState({
                                oldPasswordSecure: !this.state
                                    .oldPasswordSecure
                            })
                        }
                        onBlur={()=> this.setState({oldPasswordErr:''})}
                        error={this.state.oldPasswordErr}

                    />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox 
                        inputIcon = "lock" 
                        iconSize={20} 
                        placeholderText="Enter New Password" 
                        secureTextEntry={this.state.newPasswordSecure}
                        iconRight = {this.state.newPasswordSecure ? "eye-slash":'eye'}
                        value={this.state.newPassword}
                        onChangeText={newPassword => this.setState({newPassword: newPassword})}
                        onEndEditing={() => this.validateNewPassword()}
                        onSubmitEditing={this.onPressChangePassword}
                        onFocus={() =>
                            this.setState({
                                newPasswordErr: '',
                            })
                        }
                        iconRightFunction={() =>
                            this.setState({
                                newPasswordSecure: !this.state
                                    .newPasswordSecure
                            })
                        }
                        onBlur={()=> this.setState({newPasswordErr:''})}
                        error={this.state.newPasswordErr}
                    />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox 
                        inputIcon = "lock" 
                        iconSize={20} 
                        placeholderText="Confirm password"
                        secureTextEntry={this.state.confirmPasswordSecure}
                        iconRight = {this.state.confirmPasswordSecure ? "eye-slash":'eye'}
                        value={this.state.confirmPassword}
                        onChangeText={confirmPassword => this.setState({confirmPassword: confirmPassword})}
                        onEndEditing={() => this.validateConfirmPassword()}
                        onSubmitEditing={this.onPressChangePassword}
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
                <View style={[styles.justifyCenterContainer , {paddingTop:10, paddingLeft:30}]}>
                    <CustomButton buttonName="SUBMIT" onPress={this.onPressChangePassword}/>
                </View>
            </View>
        )
    }

    validateOldPassword = () => {
        const oldPasswordError = CheckPassword(this.state.oldPassword);
        if (oldPasswordError && oldPasswordError === 1) {
            this.setState({ oldPasswordErr: "Old password empty" });
            return false;
        } else if (oldPasswordError && oldPasswordError === 2) {
            this.setState({ oldPasswordErr: "Invalid old password" });
            return false;
        }
        return true
    };
    validateNewPassword = () => {
        const passwordError = CheckPassword(this.state.newPassword);
        if (passwordError === 1) {
            this.setState({ newPasswordErr: 'New password empty' });
            return false;
        } else if (passwordError === 2) {
            this.setState({ newPasswordErr: 'Invalid password' });
            return false;
        } else return true;
    };
    validateConfirmPassword = () => {
        const confirmPasswordError = CheckPassword(this.state.confirmPassword);
        if (confirmPasswordError === 1) {
            this.setState({
                confirmPasswordErr: 'Confirm password empty'
            });
            return false;
        } else if (this.state.newPassword !== this.state.confirmPassword) {
            this.setState({
                confirmPasswordErr: 'Confirm password is not same as password'
            });
            return false;
        }
        return true;
    };
    ValidateAll = ( ) => {
        const oldPasswordInput = this.validateOldPassword();
        const newPasswordInput = this.validateNewPassword();
        const confirmPasswordInput = this.validateConfirmPassword();
        // console.log('validation',oldPasswordInput,  newPasswordInput , confirmPasswordInput )
        if (oldPasswordInput  && newPasswordInput && confirmPasswordInput) {
            return true;
        } else {
            return false;    
        }   
    }

    onPressChangePassword = () => {
        const allValidation = this.ValidateAll()
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
})
export default ChangePassword
