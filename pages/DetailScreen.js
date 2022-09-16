import React from "react";
import { StyleSheet, Image, Text, View, TextInput } from "react-native";


const DetailScreen = ({ navigation }) => {
  return (
   
    <View style={styles.container}>

        <View>
          <Image 
              source={require('../assets/ministry-logo.png')}
              style={{maxHeight: undefined, bottom: 5, margin: 8, marginBottom: 5}} 
          />

        </View>
        
            
            <View style={styles.cards}>

                    <View>
                        <Text style={styles.title}>LP Gas</Text>
                    </View>

                <View style={styles.cardsWhite}>
                    
                    <Image 
                        source={require('../assets/5kg-litro.jpg')}
                        style={{height: undefined, width: 70}} 
                    />
                    <Text style={{left: 70, top: 10, fontSize: 17, fontWeight: 'bold'}}>Litro 5KG</Text>
                    <Text style={{right: 20, top: 50}}>Status : </Text>
                    <Text style={{right: 20, top: 50, fontWeight: 'bold'}}> Available</Text>
                </View>

                <View style={styles.cardsWhite}>
                    
                    <Image 
                        source={require('../assets/12.5kg-litro.jpg')}
                        style={{height: undefined, width: 70}} 
                    />
                    <Text style={{left: 65, top: 10, fontSize: 17, fontWeight: 'bold'}}>Litro 12.5KG</Text>
                    <Text style={{right: 50, top: 50}}>Status : </Text>
                    <Text style={{right: 50, top: 50, fontWeight: 'bold'}}> No Stock</Text>
                </View>

                <View style={styles.cardsWhite}>
                    
                    <Image 
                        source={require('../assets/37.5kg-litro.jpg')}
                        style={{height: undefined, width: 70}} 
                    />
                    <Text style={{left: 65, top: 10, fontSize: 17, fontWeight: 'bold'}}>Litro 37.5KG</Text>
                    <Text style={{right: 50, top: 50}}>Status : </Text>
                    <Text style={{right: 50, top: 50, fontWeight: 'bold'}}> Available</Text>
                </View>
                
            </View>    
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
    left: 128,
    marginBottom: 2,
    marginTop: 10
  },

  cards: {
    marginTop: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    width: '90%',
    height: 500,
    margin: 10
  },

  cardsWhite: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    top: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    height: 120,
    marginBottom: 15
  }
  
});

export default DetailScreen;
