// Filter page 
// 18-01-2021

import React from 'react'
import {  StyleSheet, ScrollView,Slider,Text, View} from 'react-native'
import { HeaderContent, SortByButton, SortByBorderButton, OptionBox, CustomButton } from '../Common/Common'
// import { Slider} from 'react-native-elements'
class Filter extends React.Component {
    state={
        slideValue:0
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <HeaderContent pageTitle="FILTER" headerContent="Lorem Ipsum is simply dummy text for printing any typesetting industry."/>
                <View style={styles.sliderContainer}>
                    <Text style={{color:'#c203fc'}}>Pricing</Text>
                <Slider
                    value={this.state.slideValue}
                    onValueChange={(slideValue) =>
                        this.setState({
                            slideValue
                        })
                    }
                    maximumValue={100}
                    step={1}
                />
                </View>
                <View
                    style={{
                        borderBottomColor: '#eeeeee',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={styles.sliderContainer}>
                    <Text style={{color:'#c203fc'}}>Sort By</Text>
                    <View style={styles.buttonContainer}>
                        <SortByButton buttonName="Top - Bottom"/>
                        <SortByBorderButton buttonName="Bottom - Top"/>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#eeeeee',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={styles.sliderContainer}>
                    <Text style={{color:'#c203fc'}}>Brand</Text>
                    <View style={styles.buttonContainer}>
                        <OptionBox buttonName="Adidas"/>
                       <OptionBox buttonName="Reebok"/>
                    </View>
                    <View style={styles.buttonContainer}>
                       <OptionBox buttonName="Puma"/>
                       <OptionBox buttonName="Lee"/> 
                    </View>
                    <View style={styles.buttonContainer}>
                       <OptionBox buttonName="Bull Sport"/>
                       <OptionBox buttonName="Nike"/>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#eeeeee',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={styles.sliderContainer}>
                    <Text style={{color:'#c203fc'}}>Offers</Text>
                    <View style={styles.buttonContainer}>
                        <OptionBox buttonName="Buy More, Save More"/> 
                       <OptionBox buttonName="No Cost EMI"/>
                    </View>
                    <View style={styles.buttonContainer}>
                       <OptionBox buttonName="Special Price"/>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#eeeeee',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={styles.sliderContainer}>
                    <Text style={{color:'#c203fc'}}>Discounts</Text>
                    <View style={styles.buttonContainer}>
                        <OptionBox buttonName="50% or More"/> 
                       <OptionBox buttonName="40% or More"/>
                    </View>
                    <View style={styles.buttonContainer}>
                       <OptionBox buttonName="30% or More"/>
                       <OptionBox buttonName="20% or More"/>
                    </View> 
                    <View style={styles.buttonContainer}>
                       <OptionBox buttonName="10% or More"/>
                       <OptionBox buttonName="Less than 10%"/>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#eeeeee',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={[styles.justifyCenterContainer , {padding:10, paddingLeft:30, marginBottom:20}]}>
                    <CustomButton buttonName="SUBMIT" onPress={() => this.props.navigation.navigate('Filter')}/>
                </View>
            </ScrollView>
         
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffffff'
    },
    sliderContainer:{
        padding:20,

    },
    buttonContainer: {
        flexDirection:'row'
    }


})
export default Filter