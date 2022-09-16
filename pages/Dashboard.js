import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";


const Dashboard = ({ navigation }) => {
  return (
   
    <View style={styles.container}>
        <View>
          <Image 
              source={require('../assets/ministry-logo.png')}
              style={{maxHeight: undefined, bottom: 130, margin: 8, marginBottom: 5}} 
          />
        </View>
        
        <View>
          <Text style={styles.title}>Dashboard</Text>
        </View>

        <TouchableOpacity 
          style={styles.cards}
          onPress={() => navigation.navigate("DetailScreen")}>
          <Text 
            style={{color: '#303F9F', fontSize: 20, marginLeft: 15 }}
          >
            LP Gas
          </Text>
            <View style={styles.square}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cards}>
          <Text 
            style={{color: '#303F9F', fontSize: 20, marginLeft: 15 }}
          >
              Live Queue Map
          </Text>
            <View style={styles.square}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cards}>
          <Text 
            style={{color: '#303F9F', fontSize: 20, marginLeft: 15 }}
          >
            Notification
          </Text>
          <View style={styles.square}></View>
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


  title: {
    fontSize: 25,
    fontWeight: "600",
    right: 13,
    bottom: 80
  },

  cards: {
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    padding: 20,
    width: '80%',
    top: 40,
    marginBottom: 20,
    justifyContent: 'space-between'
  },

  square: {
    width: 18,
    height: 18,
    backgroundColor: '#fff',
    borderColor: '#303F9F',
    borderWidth: 1,
    marginTop: 7
  },

  
});

export default Dashboard;
