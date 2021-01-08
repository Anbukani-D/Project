import React, { useState }  from 'react'
import { StyleSheet, View, TextInput,TouchableOpacity,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
export const InputBox  = props => {
    let {inputIcon, placeholderText} = props;
    return (
      <View style={styles.inputContainer}>
          <View style={styles.start}>
            <LinearGradient
                    style={styles.inputBoxIcon}
                    colors={['#fc03df', '#c203fc',  ]}
                    start ={{x:0,y:0}}
                    end ={{x:1,y:1}}
                >
                    <Icon name={inputIcon}  size={20} color="white" />
                </LinearGradient>  
            </View> 
          <TextInput placeholder={placeholderText}   />      
      </View>
    );
};

export const CustomButton  = props => {
    let {buttonName} = props;
    return (
      <View>
          <TouchableOpacity
                style={styles.buttonContainer}
                // onPress={onPress}
            >
            <LinearGradient
                style={styles.buttonContainer}
                colors={['#fc03df', '#c203fc',  ]}
                start ={{x:0,y:0}}
                end ={{x:1,y:1}}
            > 
                <Text style={styles.buttonText} >{buttonName}</Text>
            </LinearGradient>  
            </TouchableOpacity>     
      </View>
    );
};



const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width:340,   
        borderRadius:30,
        borderColor:'grey',
        borderWidth:1,
        marginTop:15
    },
    inputBoxIcon:{
        width:40,
        height:40,
        borderRadius:20,
        padding:11,
        margin:5
    },
    buttonContainer:{
        width:340,
        borderRadius:30,
        height:40,
        marginLeft:5,
        marginTop:10
    },
    buttonText: {
        textAlign:'center',
        paddingTop:10,
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    
})

