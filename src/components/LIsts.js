import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity,StyleSheet,View,Image, SafeAreaView} from "react-native";
import food from "../assets/food.jpg"
import iconPizza from "../assets/iconPizza.png";
import iconH from "../assets/iconHam.png";
import iconOutros from "../assets/iconOutros.png";
import iconPrato from "../assets/iconPrato.png";
import api from "../services/api";

export default function Lists(){

    const [revenues, setRevenues ] = useState([]);
    const [revenueFIlt, setRevenueFIlt] = useState([]);

    useEffect(()=>{
        async function getRevenue(){
            const response = await api.get("/api/revenues");
            setRevenues(response.data);
            setRevenueFIlt(response.data);
        }
        getRevenue();
    },[ setRevenues ]);

    function filterRevenues(category){
        
        if(category === "all"){
            setRevenueFIlt(revenues.map(e => {
                return e;
            }));

            return;
        };

        setRevenueFIlt(revenues.filter(e => {
            return e.category == category
        }));
        
    }

    return(
        <View>
        <View>
            <View style={styles.categorias} >
                <TouchableOpacity onPress={()=>{{filterRevenues("pizza")}}}>
                    <Image style={styles.iconCat} source={iconPizza} />
                    <View style={styles.descCategorias} >
                        <Text style={styles.iconText} >Pizza</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{{filterRevenues("Lanche")}}}>
                    <Image style={styles.iconCat} source={iconH} />
                    <View style={styles.descCategorias} >
                        <Text style={styles.iconText} >Lanche</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{{filterRevenues("executivos")}}}>
                    <Image style={styles.iconCat} source={iconPrato} />
                    <View style={styles.descCategorias} >
                        <Text style={styles.iconText} >Executivos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{{filterRevenues("outros")}}}>
                    <Image style={styles.iconCat} source={iconOutros} />
                    <View style={styles.descCategorias} >
                        <Text style={styles.iconText} >Outros</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{{filterRevenues("all")}}}>
                    <Image style={styles.iconCat} source={iconOutros} />
                    <View style={styles.descCategorias} >
                        <Text style={styles.iconText} >Total</Text>
                    </View>
                </TouchableOpacity>
          
            </View>
            
        </View>
        <SafeAreaView style={styles.container} >
            
             <View style={styles.titlePag}>
                <Text style={styles.titleTextPag}>Cardapio</Text>
            </View>
            {
                revenueFIlt.map((revenue) => (
                    <View key={revenue._id}  style={styles.card}>
                        < Image source = {{ uri:`http://localhost:3333/api/revenue/image/${revenue.image}`}}
                        style = {
                            styles.image
                        }
                        />
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>{revenue.title}</Text>
                            <Text style={styles.price}>R$ {revenue.price}</Text>
                        </View>
                        <View style={styles.conteinerButton}>
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.icon} source={food} />
                                <Text style={styles.buttonText} >Ver Igredientes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
               
            }    
        </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{        
        paddingRight: 20,
        paddingLeft:20
    },
    card:{
        borderWidth:1,
        borderColor:"#CCCCCC",
        width: "100%",
        alignSelf:"stretch",
        backgroundColor: "#FFFFFF",
        elevation:4,
        borderRadius:10,
        marginBottom:50
    },
    image:{
        width:"100%",
        height:150
    },  

    title:{
        margin:20,
        color:"#000000",
        fontSize:20,
        fontWeight:"bold"
    },

    conteinerButton:{
        alignSelf:"stretch",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        borderTopWidth:1,
        borderTopColor:"#CCCCCC"
    },
    buttonText:{
        fontSize:16,
        color:"#808080"
    },
    icon:{
        width:30,
        height:30,
        marginRight:10
    },
    button:{
        flexDirection:"row"
    },
    titlePag:{
        margin:60,
        alignItems:'center'
    },
    titleTextPag:{
        color: "rgba(220, 20, 60, 1.0)",
        fontSize:30,
        fontWeight:"bold"
    },
    fundo:{
        width:"100%",
        height:170
    },
    categorias:{
       margin:20,
       flexDirection:"row",
       justifyContent:"space-between"
    },
    desCcategorias:{
      
    },
    iconCat:{
        width:65,
        height:80
    },
    iconText:{
        marginTop:20
    },
    price:{
        margin:20,
        color:"#000000",
        fontSize:20,
        fontWeight:"bold"
    }
});