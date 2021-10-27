import React from 'react'
import {View,Text,FlatList,TouchableOpacity,Pressable,Image,StyleSheet,SafeAreaView,ScrollView,StatusBar} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Cart({navigation}){

    const CartItem = (props) => {
        
    return (
            <View style={{flexDirection:'row'}}>

            <Image 
            style={{
                padding:40,
                backgroundColor:'rgb(224,224,224)',
                width:100, 
                height:100, 
                marginLeft: 30,
                marginTop:40,
                borderRadius:10
                }}

            source={{uri:props.image}}
            />

            
            <View style={{flexDirection:'column'}}>

            
            <Text style={{marginTop:50, marginLeft:30, fontWeight:'bold', fontSize:20}}>{props.title}</Text>
            <Text style={{marginTop:10, marginLeft:30}}>{props.description}</Text>
        <Text style={{marginTop:10, marginLeft:30, color:"orange"}}>$<Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>{props.price}</Text></Text>
                
            </View>

            <View style={{flexDirection:'column'}}>
            <EvilIcons name="trash" size={24} color="rgb(204,102,0)"  style={{marginTop:50, marginLeft:70}}/>

            <View style={{flexDirection:"row"}}>
            <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" style={{marginTop:30}} />
            </TouchableOpacity>
            <Text style={{marginTop:30, marginLeft:20, fontWeight:'bold', fontSize:20}}>1</Text>
            <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="rgb(204,102,0)" style={{marginTop:29, marginLeft:20}} />
            </TouchableOpacity>
            </View>
        </View>
        </View>
       

      
    )}


    const {goBack} = navigation;
    return (
        
        
        <View style={{fflex:1}}>
    <View style={{marginTop:70, marginLeft:20, flexDirection:'row'}}>
        <TouchableOpacity onPress= {()=>goBack()
        }>
        <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <View style={{flexDirection:'column'}}>
        <Text style={{
            marginLeft:120,
            fontSize:24,
            fontWeight:"bold"
        }}>
            Cart List
        </Text>
        <Text style={{marginLeft:130}}>(3 items)</Text>
       
        </View>

        
         
    </View>

    <View>
    <CartItem description="Old bike" price="2,500.00" title="Old bike for kids" image="https://www.peacebicycles.com/wp-content/uploads/2019/12/Seafoam-Dutch-Cruiser-Bicycle-Peace-Bicycles-6-3-570x444.jpg"/>
    <CartItem description="BMX" price="2,100.00" title="BMX for racing" image="https://media.cntraveler.com/photos/5ed018bada6bded5e1ad977d/master/w_1600%2Cc_limit/bikes-2020-8.jpg"/>
    <CartItem description="Royalty-free" price="1,000.00" title="Royal free bike" image ="https://www.pashley.co.uk/images/products/thumbs/900-main-product-shot-princess-sov460x460.jpg" />

    </View>

   <View style={{margin:7, borderRadius:30, padding:90, backgroundColor:"rgb(138, 145, 145)", alignItems:"center",justifyContent:"space-between", flexDirection:"row"}}>
   <Text style={{justifyContent:"space-between", fontSize:20, color:"grey"}}>Sub-total </Text>
   <Text style={{justifyContent:"space-between",  fontSize:25}}>$5,600.00</Text>
   </View>
   
        {/** The Checkout Button */}
        <TouchableOpacity>
        <View style={{backgroundColor:"rgb(245, 172, 47)", padding:25, margin:5, borderRadius:15}}>
        <Text style={{marginTop:0, fontWeight:'bold', color:"white", textAlign:'center', fontSize:17}}>Proceed to Checkout</Text>
        
        </View>
        </TouchableOpacity>

        {/** This is my bottom navigation bar */}
        <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80, bottom:0}}>
    <View style={{flexDirection:"row"}}>

    <TouchableOpacity onPress={()=>{
        navigation.navigate("Home")
    }}>
    <Ionicons name="home-outline" size={30} color="black" style={{marginTop:20, marginLeft:30}} />
</TouchableOpacity>
        <FontAwesome name="microphone" size={30} color="white" style={{
        marginBottom:0,
         marginLeft:120,
         backgroundColor:"black",
         padding:17,
         borderRadius:27,
         borderColor:"black",
         borderWidth:1,
         overflow:'hidden'
         }}/>
            <TouchableOpacity>
         <FontAwesome5 name="shopping-bag" size={24} color="orange"  style={{marginLeft:120, marginTop:20}} />
        </TouchableOpacity>
    </View>
    
        
    </View> 
    
    
    </View>
    )
}