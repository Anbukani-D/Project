// Appliaction
// 07-01-2021

import React,{useEffect,useState} from 'react'
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SideMenu from './Common/SideMenu'
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import Home from "./Screens/Home"
import { ActivityIndicator, View } from 'react-native'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerRoutes() {
	return (
		<Drawer.Navigator drawerPosition='right' drawerContent={props => <SideMenu {...props} />}>
			<Drawer.Screen name="Home" component={MyTabs} />
		</Drawer.Navigator>
	);
  }
  function MyTabs() {
	return (
	  <Tab.Navigator style={{backgroundColor:'#b41a6a'}} screenOptions={({ route }) => ({
		tabBarIcon: ({ focused, color, size }) => {
		  let iconName;

		  if (route.name === 'Home') {
			iconName = focused
			  ? 'home'
			  : 'home';
		  } else if (route.name === 'Profile') {
			iconName = focused ? 'user-circle' : 'user';
		  } else if(route.name === 'Filter') {
			iconName = focused ? 'filter' : 'filter';
		  }	
		  // You can return any component that you like here!
		  return <Icon name={iconName} size={size} color={color} />;
		},
	  })}
	  	tabBarOptions={{
		activeTintColor: '#b41a6a',
		inactiveTintColor: 'gray',
		barStyle:{backgroundColor: '#694fad' }
	  }}>
		<Tab.Screen name="Home" component={Home} /> 
		<Tab.Screen name="Profile" component={Profile} />
		<Tab.Screen name="Filter" component={Filter} />
	  </Tab.Navigator>
	);
  }

function App() {
  const [isLoadng, setIsLoading]= useState(true);
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
	  setTimeout(()=> {setIsLoading(false)},1000);
  },[]);
  if(isLoadng){
    return(
      <View style={styles.container}>
		  <LinearGradient
				style={styles.loaderContainer}
				colors={['#b41a6a', '#7c1fa1' , ]}
				start ={{x:0,y:0}}
				end ={{x:0,y:1}}
			>         
        	<ActivityIndicator Size="large" color="#fff"/>
		</LinearGradient>
      </View>
    )
  }
  console.log('nav', DrawerRoutes)
	return (
		<NavigationContainer>
			<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> 
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
			<Stack.Screen name="Home" component={ DrawerRoutes} options={{headerShown:false}} />
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


export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	  },
	  loaderContainer: {
		flex:1,
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	  }
  })
