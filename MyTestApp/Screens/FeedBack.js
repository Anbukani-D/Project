// Feedback page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View, Text} from 'react-native'
import { InputBox, CustomButton, HeaderContent,MessageBox } from '../Common/Common'
class FeedBack extends React.Component {
    state={
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderContent pageTitle="FEEDBACK FORM" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox inputIcon = "user-o" iconSize={20} placeholderText="Your Name" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox inputIcon = "envelope-o" iconSize={18} placeholderText="Mail Id" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputBox inputIcon = "mobile" iconSize={25} placeholderText="Mobile Number" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingLeft:35}]}>
                    <MessageBox  placeholderText="Your Feedback within 400 characters" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:10, paddingLeft:30}]}>
                <CustomButton buttonName="SUBMIT" onPress={() => this.props.navigation.navigate('FeedBack')}/>
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
export default FeedBack
