import React, { useState } from "react";
import {View,Text,FlatList,TouchableOpacity,Pressable,Image,StyleSheet,SafeAreaView,ScrollView,StatusBar} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';



export default function Home({ navigation }) {

  const [heartNames, setHeartNames] = useState([
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          
          ])

   const heart = (id) => {
    return <Ionicons
            
            name={heartNames[id]}
            size={24}
            color="orange"
            style={{ marginLeft: 80 }}

            
          />;
  }

  const [list, setList] = useState([
    { name: "All", key: "1" },
    { name: "Road Bike", key: "2" },
    { name: "Mountain", key: "3" },
    { name: "Urban", key: "4" },
  ]);

  {
    /** Here are some products listed */
  }

const updateHeart = (id) => {
  console.log(id);

  let updatedList = heartNames.map((item,index) => 
    {
      if (index == id){
        if (heartNames[index] == "heart-outline"){
          return "heart";
        }
        else
        {
          return 'heart-outline';
        }
         
      }
      return item;  
    });

  setHeartNames( updatedList); 
}

  const ITEM = (props) => {
    return (
      <View
        style={{
          height: 250,
          width: 150,
          backgroundColor: "rgb(224,224,224)",
          padding: 20,
          marginTop: 30,
          borderRadius: 20,
          marginLeft: 20,
          position: "relative",
          flexDirection: "column",
        }}
      >
        {/**Body */}

        <TouchableOpacity onPress={()=>updateHeart(
        props.id)
        }>
          {heart(props.id)}
        </TouchableOpacity>

        
        
          <Image
            style={{ alignItems:"center", justifyContent:"center", marginTop:10, marginBottom:10, height: 130, maxWidth: 100, borderRadius:20 }}
            source={{uri:props.image}}
            
          />
        

        {/** description of price */}
        <Text>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "orange" }}>$</Text>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            {props.price}
          </Text>
        </View>
      </View>
    );
  };

  {
    /**the topmost navigation  */
  }
  return (
      
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="menu-outline" size={24} color="black" />

        
          <FontAwesome name="motorcycle" size={25} color="black" />
     

        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications" size={20} color="black" style={{marginLeft: 12}}/>
        </View>
      </View>

      {/**our first and second header */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, color: "grey" }}>
          The World's{" "}
          <Text style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}>
            Best Bike
          </Text>
        </Text>
      </View>

      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 27,
        }}
      >
        Categories
      </Text>

      <View
        style={{ borderRadius: 10, marginTop: 10, flexDirection: "column" }}
      >
        <FlatList
          horizontal={true}
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 10,
                  padding: 20,
                  borderRadius: 10,
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>




      {/**the prperties of the grid */}
      
      <SafeAreaView style={{height:570}}>
      <ScrollView >
      <View style={{ flexDirection: "row" }}>
        
          
          <ITEM
            title="Old bike"
            image="https://www.peacebicycles.com/wp-content/uploads/2019/12/Seafoam-Dutch-Cruiser-Bicycle-Peace-Bicycles-6-3-570x444.jpg"
            id={0}
            price="2,500.00
            "
          />
          <ITEM
          id={1}
            price="2,100.00"
            title="BMX"
            image="https://media.cntraveler.com/photos/5ed018bada6bded5e1ad977d/master/w_1600%2Cc_limit/bikes-2020-8.jpg"
          />
          
        
      </View>

      <View style={{ flexDirection: "row" }}>
        <ITEM id={2} price="200.00" title="Czech bicycle" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLEY-7ObMncTbcScd0E48sDT2uP668vR-BQ&usqp=CAU" 
        />
        <ITEM id={3} price="1,000.00" title="Royalty-free" image="https://www.pashley.co.uk/images/products/thumbs/900-main-product-shot-princess-sov460x460.jpg" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <ITEM id={4} price="1,200.00" title="Fast bike" image="https://media.theradavist.com/uploads/2021/10/Baphomet-Bicycles-New-Mexico-Single-Speed-Rigid-MTB-28.jpg?w=750&quality=75" />
        <ITEM id={5} price="2,000.00" title="Mountain bike" image="https://d19o86bouc4ntb.cloudfront.net/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/g/2/g21_g54501u_24-u-stomper-prime_slv_os_pd.png" />
      </View>
      </ScrollView>
    </SafeAreaView>

    {/**The Bottom Navigation Bar */}

    <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80,position:'absolute', bottom:0}}>
    <View style={{flexDirection:"row"}}>
    <Entypo name="home" size={32} color="orange" style={{marginTop:20, marginLeft:30}} />

        <FontAwesome name="microphone" size={30} color="white" style={{
        marginTop:1,
         marginLeft:120,
         backgroundColor:"black",
         padding:17,
         borderRadius:27,
         borderColor:"black",
         borderWidth:1,
         overflow:'hidden'
         }}/>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Cart")
            }}>
         <SimpleLineIcons name="bag" size={31} color="black" style={{marginLeft:120, marginTop:20}} />
        </TouchableOpacity>
    </View>
    
        
    </View> 
    </View>
   


      
  );
}