//! --> import packages here
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from "react-native";

const Email = ({ navigation }) => {
  return (
    <View style={styles.container}>
          
            <View>
                <Text style={styles.title}>OTP</Text>
                <Text style={styles.title}>Confirmation</Text>
            </View>

            <View>
              <Text style={styles.titlePara}>Please Enter your OTP Code sended via email:</Text>
            </View>
            

            <View style={styles.txtbox}>
              <TextInput placeholder='Enter OTP here..'></TextInput>
            </View>
   
            <TouchableOpacity
                onPress={() => navigation.navigate("ResetPassword")}
                style={styles.loginButton}
            >
                <Text style={styles.loginText}>Confirm</Text>

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
    right: 30,
    color: 'black',
  },

  titlePara: {
    fontSize: 20,
    opacity: 0.5,
    bottom: 65,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
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


export default Email;
