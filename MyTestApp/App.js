// Appliaction
// 07-01-2021

import React from 'react'
import Login from "./Screens/Login"
import SignUp from "./Screens/SignUp"
import ChangePassword from "./Screens/ChangePassword"
import ForgotPassword from "./Screens/ForgotPassword"
import EmailSubscription from "./Screens/EmailSubscription"
import FeedBack from "./Screens/FeedBack"
import SubmitRequest from "./Screens/SubmitRequest"
import Filter from "./Screens/Filter"
import Profile from "./Screens/Profile"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  StyleSheet, View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SideMenu from './Common/SideMenu'
import Slider from './Screens/Slider'
import LinearGradient from 'react-native-linear-gradient'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const images = [
  "https://images.freeimages.com/images/small-previews/a3c/maia-2-1436576.jpg",
  "https://images.freeimages.com/images/premium/thumbs/6933/6933701-nightscape-downtown-los-angeles-with-headlights-trailing.jpg",
  "https://images.freeimages.com/images/small-previews/a5d/honeybee-1641535.jpg",
  "https://images.freeimages.com/images/small-previews/836/vessels-1641545.jpg",
  "https://images.freeimages.com/images/small-previews/405/church-of-epe-1641397.jpg"
]


function DrawerRoutes() {
	return (
		<Drawer.Navigator drawerPosition='right' drawerContent={props => <SideMenu {...props} />}>
			<Drawer.Screen name="Home" component={Home} />
			
		</Drawer.Navigator>
	);
  }

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator >
			<Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> 
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
			<Stack.Screen name="Home" component={DrawerRoutes} options={{headerShown:false}} />
			<Stack.Screen name="ChangePassword" component={ChangePassword} />
			<Stack.Screen name="EmailSubscription" component={EmailSubscription} />
			<Stack.Screen name="Feedback" component={FeedBack} />
			<Stack.Screen name="Submit Request" component={SubmitRequest} />
			<Stack.Screen name="Filter" component={Filter} />
			<Stack.Screen name="SignOut" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
  	);
}

// export function Header({navigation}) {
// 	return (
// 		<View style={styles.menuContainer}>
// 			<Text style={{color:'#fff'}}>Home</Text>
// 			<Icon name="bars" color="white" size={25} onPress={()=>{navigation.openDrawer()}}></Icon>
// 		</View>
// 	)
// }
export function Home({navigation}) {
  return (
    <View style={styles.container}>
      <LinearGradient
      	style={styles.container}
        colors={['#b41a6a', '#7c1fa1', '#b41a6a','#7c1fa1'  ]}
        start ={{x:0,y:0}}
        end ={{x:0,y:1}}
    >  
      <View style={styles.menuContainer}>
        <Text style={{color:'#fff'}}>Home</Text>
          <Icon name="bars" color="white" size={25} onPress={()=>{navigation.openDrawer()}}></Icon>
       </View>
       <Slider images={images}/>
       </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
  },
  menuContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    padding:10,
    backgroundColor:'#b41a6a'
  },
  bgImage:{
    flex: 1,
    resizeMode: "cover",
  }
})

export default App
