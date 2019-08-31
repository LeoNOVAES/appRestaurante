import React from "react";
import {Text,View,StyleSheet,ScrollView} from "react-native";
import Header from "../components/Header"; 
import List from "../components/LIsts";

export default  function home(){
    return(
        <ScrollView style={styles.container}>
            <Header/>
           
            <List/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(220,220,220, 0.5)",
        flex:1
    },
    
});