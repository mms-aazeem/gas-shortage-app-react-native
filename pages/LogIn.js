import React from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from "react-native";




const LogIn = ({ navigation }) => {
    return (
      <View style={styles.container}>
         <View>
            <Image 
                source={require('../assets/logo.png')}
                style={{maxHeight: undefined, bottom: 25, marginLeft: 8, marginBottom: 5}} 
            />
          </View>
      <View>
        <Text style={styles.title}>SLgasApp</Text>
      </View>


      
        <View style={styles.txtbox}>
          <TextInput placeholder='Enter your username..'></TextInput>
        </View>

        <View style={styles.txtbox}>
          <TextInput placeholder='Enter your password..'></TextInput>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
        <Text style={styles.loginText}
        >Login</Text>
      </TouchableOpacity>

        <View>
        <Text 
          style={{textDecorationLine: 'underline'}}
          onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password ?</Text>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    bottom: 20,
    fontWeight: 'bold',
    color: '#303f9f',
  },

  login: {
    fontSize: 15,
    color: '#fff'
  },

  txtbox: {
    width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 15,
    borderWidth: 1,
    color: '#303f9f',
  },

  loginButton: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: '#303f9f',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    marginTop: 20,
    marginBottom: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25
  },

  loginText: {
      color: '#fff',
      fontWeight: 'bold'
  },
});

export default LogIn;
