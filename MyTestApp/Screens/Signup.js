// sign up page 
// 13-01-2021

import React from 'react'
import {  StyleSheet, View} from 'react-native'
import { InputBox, CustomButton, HeaderContent } from '../Common/Common'
class SignUp extends React.Component {
    state={
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderContent pageTitle="Sign Up" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={styles.spacing}>
                    <InputBox inputIcon = "user-o" iconSize={20} placeholderText="Enter user name" label="User Name"/>
                </View>
                <View style={styles.spacing}>
                    <InputBox inputIcon = "envelope-o" iconSize={18} placeholderText="Enter email id" label="Email Id"/>
                </View>
                <View style={styles.spacing}>
                    <InputBox inputIcon = "mobile" iconSize={25} placeholderText="Enter your 10 digit mobile number" label="Mobile Number"/>
                </View>
                <View style={styles.spacing}>
                    <InputBox inputIcon = "lock" iconSize={20} placeholderText="Password should be 8-15 characters" label="Password"/>
                </View>
                <View style={styles.spacing}>
                    <InputBox inputIcon = "lock" iconSize={20} placeholderText="Repeat the password" label="Confirm Password"/>
                </View>
                <View style={[{paddingTop:10, paddingLeft:30}]}>
                    <CustomButton buttonName="SIGN UP" onPress={() => this.props.navigation.navigate('SignUp')}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    spacing: {
        paddingTop:20, 
        paddingLeft:35
    }


})
export default SignUp
