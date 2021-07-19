
import React from 'react';
import {  StyleSheet ,Image,View,SafeAreaView} from 'react-native';

const ViewImageScreen = () => {
    return (
 <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row-reverse',justifyContent:'space-between',marginTop:'15%',}}>
             <View style={[styles.box,{backgroundColor: "#4ECDC4",marginRight:'10%'}]}/>
            <View style={[styles.box,{backgroundColor: "#fc5c65", marginLeft:'10%'}]}/>
      </View>
            <Image  style={styles.image} source={require('../assets/chair.jpg')}></Image>
</SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:'black',
        width:'100%',
        height:'100%', 
               },

      image:{
        
          width:'100%',
          height:430,
          marginTop:'20%',
           },

      box: {
         width: 50,
         height: 50,
           } 

})

export default ViewImageScreen;
