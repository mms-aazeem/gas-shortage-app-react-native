import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Sms from "./pages/Sms";
import Email from "./pages/Email";
import ResetPassword from "./pages/ResetPassword";
import DetailScreen from "./pages/DetailScreen";

const stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Index" component={Index} options={{headerShown: false}} />
      <stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: true}}/>
      <stack.Screen name="LogIn" component={LogIn} options={{headerShown: true}}/>
      <stack.Screen name="Register" component={Register} options={{headerShown: true}}/>
      <stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: true}}/>
      <stack.Screen name="Sms" component={Sms} options={{headerShown: true}}/>
      <stack.Screen name="Email" component={Email} options={{headerShown: true}}/>
      <stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: true}}/>
      <stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: true}}/>
    </stack.Navigator>
  </NavigationContainer>
);