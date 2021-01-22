// Side menu
// 20-01-2021

import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {  StyleSheet, View, Text,Switch, ScrollView,Image, TouchableOpacity} from 'react-native'
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import { Avatar } from 'react-native-elements';


const SideMenu = (props) => {
    const [cDarkTheme, setDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setDarkTheme(!cDarkTheme);
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView>
                <View style={[styles.row, styles.space]} >
                    <View >
                        <Avatar
                            rounded
                            source={require('../images/img.jpeg')}
                        />
                    </View>
                    <View>
                        <Text style={styles.space}>Anbu David</Text>
                    </View>
                </View>
                    
                    <DrawerItem
                        icon={ ()=>(<Icon name="user-o" size={15}/>)}
                        label="Profile"
                        onPress={()=>{props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem
                        icon={ ()=>(<Icon name="filter" size={15}/>)}
                        label="Filter"
                        onPress={()=>{props.navigation.navigate('Filter')}}
                    />
                    <DrawerItem
                        icon={ ()=>(<Icon name="comments-o" size={15}/>)}
                        label="Feedback"
                        onPress={()=>{props.navigation.navigate('Feedback')}}
                    />
                    <DrawerItem
                        icon={ ()=>(<Icon name="retweet" size={15}/>)}
                        label="Submit Request"
                        onPress={()=>{props.navigation.navigate('Submit Request')}} 
                     />
                     <DrawerItem
                        icon={ ()=>(<Icon name="unlock-alt" size={15}/>)}
                        label="Change Password"
                        onPress={()=>{props.navigation.navigate('ChangePassword')}} 
                     />
                     <DrawerItem
                        icon={ ()=>(<Icon name="sign-out" size={15}/>)}
                        label="Sign Out"
                        onPress={()=>{props.navigation.navigate('Login')}} 
                     />
                     <TouchableOpacity  onPress={()=> {toggleTheme()}}>
                         <View style={[styles.switchContainer,styles.space]}>
                             <Text>Dark Theme</Text>
                                 <Switch style={{ marginLeft:50}} value={cDarkTheme}/>
                                 </View>
                             
    
                         
                     </TouchableOpacity>

            </DrawerContentScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#eeeeff'
    },
    row:{
        flexDirection:'row',
      },
    space:{
        padding:10
    },
    switchContainer:{
        flexDirection:'row'
    }
})
export default SideMenu
