import React, { useState }  from 'react'
import { StyleSheet, View, TextInput,TouchableOpacity,Text, Keyboard,KeyboardAvoidingView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Datepicker, Autocomplete, AutocompleteItem} from '@ui-kitten/components';

export const InputBox  = props => {
    let {inputIcon, iconSize, placeholderText,label,error,  iconRight, ...rest} = props;
    return (
        <>
        <Text style={[styles.labelText , {paddingBottom:10}]}>{label}</Text>
        <View style={[styles.inputContainer,styles.row]}>
            <View style={styles.start}>
                <LinearGradient
                        style={styles.inputBoxIcon}
                        colors={['#9f1b80', '#7c1fa1']}
                        start ={{x:0,y:0}}
                        end ={{x:1,y:1}}
                    >
                        <Icon name={inputIcon} size={iconSize} color="white"  />
                    </LinearGradient>  
                </View> 
            <TextInput placeholder={placeholderText} {...rest}/>  
                <View style={styles.passwordIcon}>
                    <TouchableOpacity onPress={props.iconRightFunction}>
                        <Icon name={iconRight} size={iconSize} color="black"  /> 
                    </TouchableOpacity>  
                </View> 
        </View>
        <Text style={styles.errorText}>{error}</Text>
      </>
    );
};
export const InputField  = props => {
    let {inputIcon, iconSize, placeholderText,label, error, ...rest} = props;
    return (
        <>
        <Text style={[styles.labelText , {paddingBottom:10}]}>{label}</Text>
        <View style={[styles.inputContainer, styles.row,{paddingLeft:10}]}>
            <TextInput placeholder={placeholderText} {...rest}  />      
        </View>
        <Text style={styles.errorText}>{error}</Text>
      </>
    );
};

export const CustomButton  = props => {
    let {buttonName, ...rest} = props;
    return (
      <View>
          <TouchableOpacity
                style={styles.buttonContainer}
                {...rest}
            >
            <LinearGradient
                style={styles.buttonContainer}
                colors={['#9f1b80', '#7c1fa1',  ]}
                start ={{x:0,y:0}}
                end ={{x:1,y:1}}

            > 
                <Text style={styles.buttonText} >{buttonName}</Text>
            </LinearGradient>  
            </TouchableOpacity>     
      </View>
    );
};
export const HeaderContent  = props => {
    let {pageTitle, headerContent} = props;
    return (
      <View>
             <Text style={styles.pageTitleText}>{pageTitle}</Text>  
             <Text style={styles.textCenter}>{headerContent}</Text> 
      </View>
    );
};
export const MessageBox = props => {
    let { placeholderText,label, error, ...rest} = props;
    return (
    <>
        <Text style={[styles.labelText , {paddingBottom:10}]}>{label}</Text>
        <View style={[styles.messageBoxContainer,styles.inputContainer]}>
            <TextInput placeholder={placeholderText} {...rest}  
                multiline={true}
            />
        </View>
        <Text style={styles.errorText}>{error}</Text>
    </>
    )
}
export const SortByButton = props => {
    let {buttonName, ...rest} = props;
    return (
        <View>
            <TouchableOpacity
                style={styles.smallButton}
                // onPress={}
            >
            <LinearGradient
                style={styles.smallButton}
                colors={['#9f1b80', '#7c1fa1',  ]}
                start ={{x:0,y:0}}
                end ={{x:1,y:1}}
            > 
                <Text style={styles.buttonText} >{buttonName}</Text>
            </LinearGradient>  
            </TouchableOpacity>     
        </View>
    )
}
export const SortByBorderButton = props => {
    let {buttonName, ...rest} = props;
    return (
        <View>
            <TouchableOpacity
                style={styles.smallButton}
            >
            <View
                style={styles.borderButton}
            > 
                <Text style={ {color:'black', textAlign:'center', paddingTop:10,}} >{buttonName}</Text>
            </View>  
            </TouchableOpacity>     
        </View>
    )
}
export const OptionBox = props => {
    let {buttonName} = props;
    const [items, setItems] = useState(true);
    
    return (
        <>
        {items?
            <View
                style={[styles.borderButton, styles.row,{justifyContent:'space-between'}]} 
            > 
                <Text style={ {color:'black', textAlign:'left', paddingTop:10,}} >{buttonName}</Text>
                <View style={ { paddingVertical:5,}}>
                <TouchableOpacity
                    onPress={()=> setItems(!items)}
                >
                <LinearGradient
                    style={styles.closeIcon}
                    colors={['#9f1b80', '#7c1fa1']}
                    start ={{x:0,y:0}}
                    end ={{x:1,y:1}}
                >
                    <Icon name="times" size={12} color="white"   />
                </LinearGradient>  
            </TouchableOpacity>  
            </View>    
            
        </View>
        :null}
        </>
    )
}
export const SelectBox  = props => {
    let {inputIcon, iconSize, placeholderText,label, ...rest} = props;
    return (
        <>
        <Text style={[styles.labelText , {paddingBottom:10}]}>{label}</Text>
        <View style={styles.inputContainer, styles.row}>
            <View style={styles.start}>
                <LinearGradient
                        style={styles.inputBoxIcon}
                        colors={['#9f1b80', '#7c1fa1']}
                        start ={{x:0,y:0}}
                        end ={{x:1,y:1}}
                    >
                        <Icon name={inputIcon} size={iconSize} color="white"  />
                    </LinearGradient>  
                </View> 
            <TextInput placeholder={placeholderText} {...rest}  />      
        </View>
      </>
    );
};
export const CustomDatePicker  = props => {
    let {inputIcon, iconSize, placeholderText,label,error,...rest} = props;
    return (
        <View>
        <Text style={[styles.labelText , {paddingBottom:10}]}>{label}</Text>
        <View style={[styles.inputContainer,styles.row]}>
            <View style={styles.start}>
                <LinearGradient
                        style={styles.inputBoxIcon}
                        colors={['#9f1b80', '#7c1fa1']}
                        start ={{x:0,y:0}}
                        end ={{x:1,y:1}}
                    >
                        <Icon name={inputIcon} size={iconSize} color="white"  />
                    </LinearGradient>  
                </View> 
                <Datepicker
                    placeholder={placeholderText}
                    {...rest}
                />
            
        </View>
        <Text style={styles.errorText}>{error}</Text>
        
      </View>
    );
};
    const movies = [
        { title: 'Star Wars' },
        { title: 'Back to the Future' },
        { title: 'The Matrix' },
        { title: 'Inception' },
        { title: 'Interstellar' },
    ];
    const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());
    export const CustomSearchSelect  = props => {
        const [value, setValue] = React.useState(null);
        const [data, setData] = React.useState(movies);
        const onSelect = (index) => {
            setValue(movies[index].title);
        };

        const onChangeText = (query) => {
            setValue(query);
            setData(movies.filter(item => filter(item, query)));
        };

        const renderOption = (item, index) => (
            <AutocompleteItem
                key={index}
                title={item.title}
            />
        );
        let {inputIcon, iconSize, placeholderText,label,error,iconRight,...rest} = props;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
            <Text style={[styles.labelText , {paddingBottom:10}]}>{label}</Text>
            <View style={[styles.inputContainer,styles.row]}>
                <View style={styles.start}>
                    <LinearGradient
                            style={styles.inputBoxIcon}
                            colors={['#9f1b80', '#7c1fa1']}
                            start ={{x:0,y:0}}
                            end ={{x:1,y:1}}
                        >
                            <Icon name={inputIcon} size={iconSize} color="white"  />
                        </LinearGradient>  
                    </View> 
                    <Autocomplete
                        onPress={Keyboard.dismiss}
                        style={styles.selectStyle}
                        placeholder={placeholderText}
                        {...rest}
                        value={value}
                        onSelect={onSelect}
                        onChangeText={onChangeText}>
                        {data.map(renderOption)}
                    
                    </Autocomplete>
                    <View style={styles.passwordIcon}>
                        <TouchableOpacity onPress={props.iconRightFunction}>
                            <Icon name={iconRight} size={iconSize} color="black"  /> 
                        </TouchableOpacity>  
                    </View> 
                
            </View>
            <Text style={styles.errorText}>{error}</Text>
            
        </KeyboardAvoidingView>
        );
    };


const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
    },
    inputContainer: {
        width:340,   
        borderRadius:30,
        borderColor:'grey',
        borderWidth:1,
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
    labelText: {
        color:'#c203fc',
        marginLeft:5,
    },
    pageTitleText: {
        fontWeight:'bold',
        fontSize:22,
        paddingTop:30,
        textAlign:'center'
    },
    textCenter:{
        textAlign:'center',
        color:'grey',
        fontSize:16
    },
    smallButton: {
        width:170,
        borderRadius:30,
        height:40,
        marginLeft:5,
        marginTop:10

    },
    borderButton: {
        borderWidth:3,
        borderStartColor:'#9f1b80', 
        borderEndColor:'#7c1fa1', 
        borderTopColor:'#9f1b80', 
        borderBottomColor:'#7c1fa1',
        borderRadius:30,
        width:180,
        height:40,
        marginLeft:5,
        marginTop:10

    },
    row: {
        paddingHorizontal:10,
        flexDirection:'row',
    },
    closeIcon:{
        width:25,
        height:25,
        borderRadius:20,
        padding:8,
    },
    errorText:{
        color:'red',
        fontSize:11,
        paddingLeft:20
    },
    passwordIcon:{
        flex:1,
        alignSelf:'center',
        alignItems:'flex-end',
        marginRight:15
    },
    messageBoxContainer:{
        height:160,
        padding:10
    },
    selectStyle:{
        borderRadius:0,
        backgroundColor:'#ffffff',
    }
    
})

