import React from 'react';
import { Text, View , Image, ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  
    return (
      <View style={{ flex:1,width:'100%'}}>
 <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
           
       <View style={{paddingTop:70,paddingLeft:138}}>
            <Image  style={styles.weblogo} source={require('../assets/logo-red.png')}></Image>
           
       </View>
            <Text  style={styles.text}>Sell What You Don't Need</Text>
           
             <View style={[styles.pink]}></View>
             <View style={styles.blue} ></View>
    </ImageBackground>
    </View>
    );
}



const styles = StyleSheet.create({  
   weblogo:{
            paddingTop:"20%",
            alignItems:'center',
            justifyContent:'space-between',
            width: 100,
            height: 100,
               
          },
   text:{
           paddingTop:"3%",
           paddingLeft:115,    
           alignItems:'center',
           alignContent:'center',
           justifyContent: 'center',
        },
                
   pink:{
            marginTop: "120%",
            flex:0.7,
            backgroundColor:'#fc5c65',
           
        },

    blue:{
      
        flex:0.7,
        backgroundColor:'#4ECDC4',   
         }
})

export default WelcomeScreen;