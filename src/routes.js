import React from "react";
import { createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from "./pages/Home"
import Pedidos from "./pages/Pedidos"
import Perfil  from "./pages/Perfil"

export default createAppContainer(
    createBottomTabNavigator({
        Home:{
            screen:Home,
             navigationOptions:{
                tabBarIcon:(f => {
                    return f.focused ?  (<Icon name="home" size={30} color="rgba(220,20,60, 1.0)" />)    
                    : (<Icon name="home" size={30} color="#999" />)
                })
            }
        },
        Pedidos:{
            screen:Pedidos,
            navigationOptions:{
                tabBarIcon:(f => {
                    return f.focused ?  (<Icon name="list" size={30} color="rgba(220,20,60, 1.0)" />)    
                    : (<Icon name="list" size={30} color="#999" />)
                })
            }
        },
        Perfil:{
            screen:Perfil,
             navigationOptions:{
                tabBarIcon:(f => {
                    return f.focused ?  (<Icon name="user" size={30} color="rgba(220,20,60, 1.0)" />)    
                    : (<Icon name="user" size={30} color="#999" />)
                })
            }
        }
    },
    {
        tabBarOptions:{
            showLabel:false,
            activeBackgroundColor: "rgba(220,20,60, 0.1)",
            inactiveBackgroundColor:"#CCCCCC"
        }
    }
    ));