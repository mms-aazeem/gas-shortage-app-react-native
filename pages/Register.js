//! --> import packages here
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from "react-native";


const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
          
            <View>
                <Image 
                    source={require('../assets/logo.png')}
                    style={{maxHeight: undefined, bottom: 25, marginLeft: 8, marginBottom: 5}} 
                />
            </View>

            <View style={styles.txtbox}>
              <TextInput placeholder='Enter your name here..'></TextInput>
            </View>
    
            <View style={styles.txtbox}>
              <TextInput placeholder='Enter your email here..'></TextInput>
            </View>

            <View style={styles.txtbox}>
              <TextInput placeholder='Enter your phone no here..'></TextInput>
            </View>
          
            <View style={styles.txtbox}>
              <TextInput placeholder='Enter your username..'></TextInput>
            </View>
    
            <View style={styles.txtbox}>
              <TextInput placeholder='Enter your password..'></TextInput>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate("LogIn")}
                style={styles.loginButton}
            >
                <Text style={styles.loginText}>Register</Text>

            </TouchableOpacity>

            <View style={{flexDirection: 'row'}}>
            <Text>Already have an account ? </Text>
            <Text 
              style={styles.registerText}
              onPress={() => navigation.navigate("LogIn")}
              >
                Login
            </Text>
          </View>
    
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    bottom: 85,
    color: '#303f9f',
  },


  txtbox: {
    width: "90%",
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    color: '#003539',
  },

  loginButton: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: '#303f9f',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    marginBottom: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25
  },

  loginText: {
      color: '#fff',
      fontWeight: 'bold'
  },

  registerText: {
    color: '#303f9f',
    fontWeight: 'bold'
  },

});


export default Register;
