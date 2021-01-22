// Change Password page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View, Text} from 'react-native'
import { InputBox, CustomButton, HeaderContent } from '../Common/Common'
class ChangePassword extends React.Component {
    state={
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderContent pageTitle="CHANGE PASSWORD" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox inputIcon = "lock" iconSize={20} placeholderText="Enter Old Password" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox inputIcon = "lock" iconSize={20} placeholderText="Enter New Password" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox inputIcon = "lock" iconSize={20} placeholderText="Confirm password" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:10, paddingLeft:30}]}>
                    <CustomButton buttonName="SUBMIT" onPress={() => alert('Changed Password!')}/>
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
export default ChangePassword
