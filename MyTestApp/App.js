// Login page 
// 07-01-2021

import React from 'react'
import {  StyleSheet, View,} from 'react-native'
import Login from "./Screens/Login"
import SignUp from "./Screens/Signup"
import ChangePassword from "./Screens/ChangePassword"
import ForgotPassword from "./Screens/ForgotPassword"
import EmailSubscription from "./Screens/EmailSubscription"
import FeedBack from "./Screens/FeedBack"
import SubmitRequest from "./Screens/SubmitRequest"
import Filter from "./Screens/Filter"
import Profile from "./Screens/Profile"


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
         {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        {/* <Stack.Screen name="Change Password" component={ChangePassword} /> */}
        {/* <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Email Subscription" component={EmailSubscription} />  */}
        {/* <Stack.Screen name="Feedback" component={FeedBack} /> */}
        {/* <Stack.Screen name="Submit Request" component={SubmitRequest} /> */}
        {/* <Stack.Screen name="Filter" component={Filter} /> */}
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    
})
export default App
