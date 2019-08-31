import React from "react";
import {Text, StyleSheet,View} from "react-native";

export default function Header(){
    return(
        <View  style={styles.header}>
            <Text style={styles.text} > Restaurante </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height:50,
        width:"100%",
        backgroundColor: "rgba(220,20,60, 1.0)",
        justifyContent: "center"
    },
    text:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:"bold"
        
    }
});