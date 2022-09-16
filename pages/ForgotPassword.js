//! --> import packages here
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from "react-native";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
          
            <View>
                <Text style={styles.title}>Forgot</Text>
                <Text style={styles.title}>Password</Text>
            </View>

            <View>
                <Text style={styles.titlePara}>Select which contact details should we used to reset your password</Text>
            </View>

            <TouchableOpacity  
                style={styles.cards}
                onPress={() => navigation.navigate("Sms")}>
               <View>
                    <Text style={{fontSize: 20}}>from text message</Text>
               </View>
               <View>
                    <Text style={{fontSize: 25}}>*******071</Text>
               </View>
           </TouchableOpacity>

           <TouchableOpacity  
                style={styles.cards}
                onPress={() => navigation.navigate("Email")}>
                    
               <View>
                    <Text style={{fontSize: 20}}>via email</Text>
               </View>
               <View>
                    <Text style={{fontSize: 25}}>*******@gmail.com</Text>
               </View>
           </TouchableOpacity>
            
        <StatusBar style="auto" />
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
    bottom: 30,
    right: 70,
    color: 'black',
  },

  titlePara: {
    fontSize: 20,
    opacity: 0.5,
    bottom: 15,
    padding: 15,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cards: {
      backgroundColor: '#8d8d8d',
      padding: 35,
      width: 300,
      borderRadius: 10,
      marginBottom: 10
  }

});


export default ForgotPassword;
