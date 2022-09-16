//! --> import packages here
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from "react-native";

const ResetPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
          
            <View>
                <Text style={styles.title}>Reset</Text>
                <Text style={styles.title}>Password</Text>
            </View>

            

            <View style={styles.txtbox}>
              <TextInput placeholder='Enter new password here..'></TextInput>
            </View>

            <View style={styles.txtbox}>
              <TextInput placeholder='confirm passowrd..'></TextInput>
            </View>
   
            <TouchableOpacity
                onPress={() => navigation.navigate("LogIn")}
                style={styles.loginButton}
            >
                <Text style={styles.loginText}>Reset Password</Text>

            </TouchableOpacity>
            
    
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
    fontSize: 50,
    bottom: 95,
    right: 45,
    color: 'black',
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
    color: '#003539',
    fontWeight: 'bold'
  },

});


export default ResetPassword;
