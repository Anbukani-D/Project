// Submit Request page 
// 15-01-2021

import React from 'react'
import {  StyleSheet, View, Text, ScrollView} from 'react-native'
import { InputField, CustomButton, HeaderContent,MessageBox } from '../Common/Common'

class SubmitRequest extends React.Component {
    state={
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <HeaderContent pageTitle="SUBMIT REQUEST" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputField placeholderText="Enter your First Name" label="First Name"/>
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputField placeholderText="Enter your Last Name" label="Last Name" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputField placeholderText="Enter your Email Id" label="Email Id" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputField placeholderText="Enter your 10 digit mobile number" label="Mobile Number" />
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <InputField placeholderText="Enter the subject" label="Subject" />
                </View> 
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <MessageBox  placeholderText="Enter your message within 400 characters" label="Message" />
                    <Text style={{fontSize:12,color:'grey'}}>Please verify your entered details before submitting</Text>
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:20, paddingLeft:35}]}>
                    <View style={[styles.fileUploadContainer]}>
                        <Text style={{color:'#c203fc'}}>Add or Drag and Drop</Text>
                        <Text style={{color:'grey'}}> your files here</Text>
                    </View>
                    <Text style={{fontSize:12,color:'grey'}}>Word, Excel, PDF, JPEG and PNG are accepted. </Text>
                    <Text style={{fontSize:12,color:'grey'}}>File size should be within 10 mb </Text>
                </View>
                <View style={[styles.justifyCenterContainer , {paddingTop:10, paddingLeft:30}]}>
                    <CustomButton buttonName="SUBMIT" onPress={() => this.props.navigation.navigate('SubmitRequest')}/>
                </View>
            </ScrollView>
         
        )
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


})
export default SubmitRequest
