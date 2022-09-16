import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from "react-native";


const Index = ({ navigation }) => {
  return (
   
    <View style={styles.container}>
        <View>
            <Image 
                source={require('../assets/logo.png')}
                style={{maxHeight: 300, bottom: 80, marginLeft: 45, marginBottom: 60}} 
            />
            <View>
              <Text style={styles.titleText}>බලශක්ති අමාත්යාංශය</Text>
            </View>
            <View>
              <Text style={styles.titleText}>வலுசக்தி அமைச்சு</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Ministry of Energy</Text>
            </View>
        </View>
        
        
             
                <TouchableOpacity
                  onPress={() => navigation.navigate("LogIn")}
                  style={styles.loginButton}
              >
                  <Text style={styles.loginText}>Login</Text>

              </TouchableOpacity>
             
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={styles.registerButton}
            >
                <Text style={styles.registerText}>Register</Text>

            </TouchableOpacity>
            
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 23,
    bottom: 130,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#303f9f'

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
      color: 'white',
      fontWeight: 'bold'
  },

  registerButton: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: '85%',
    borderColor: '#303f9f',
    borderWidth: 1,
    borderRadius: 25
  },

  registerText: {
    color: '#303f9f',
    fontWeight: 'bold'
  },
});

export default Index;
