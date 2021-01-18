// Forgot Password page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View, Text} from 'react-native'
import { InputBox, CustomButton, HeaderContent } from '../Common/Common'
class ForgotPassword extends React.Component {
    state={
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderContent pageTitle="FORGOT PASSWORD" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox inputIcon = "envelope-o" iconSize={18} placeholderText="Enter email id"/>
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:10, paddingLeft:30}]}>
                <CustomButton buttonName="SUBMIT" onPress={() => this.props.navigation.navigate('ForgotPassword')}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },


})
export default ForgotPassword
