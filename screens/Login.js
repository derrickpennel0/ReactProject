import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export default function Login({navigation}){
    return (
    <View style = {{ flex:1 , justifyContent: "center", alignItems: "center"}} > 
    
    <Image 
    style = {{
        width : 170,
        height : 170,
        borderRadius : 15,
        transform: [{rotate: '-40deg'}],
        marginBottom : 15,
        }
    }
    
    source = {{url: "https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg"}} /> 
     <Text style= {{ color : "rgba(0,0,0,0.6)", fontSize : 35}}> Welcome to</Text>
     <Text style = {{color: "black", fontSize: 40, fontWeight : "600",}}>Power Bike Shop</Text>
      
          <View style = {{}}>
      <TouchableOpacity style={{
      backgroundColor:"rgb(224,224,224)", 
         padding : 10, 
         paddingHorizontal :60,
         marginTop: 20,
         borderRadius : 10,
         flexDirection : "row",
         }}
         >  
        
         <AntDesign name="google" size={24} color="orange" />
     <Text style= {{fontSize : 20, marginLeft:10}}>Login with Gmail</Text>
     </TouchableOpacity>
           </View>

     <TouchableOpacity
     onPress={()=>{
         navigation.navigate('Home')
     }}
      style ={{
      backgroundColor:"black", 
         padding : 10, 
         paddingHorizontal :60,
         marginTop: 20,
         borderRadius : 10,
         flexDirection : "row",
         }}
         >  
         <AntDesign name="apple1" size={24} color="white" />
     <Text style= {{fontSize : 20, marginLeft:10, color :"white"}}>Login with Apple</Text>
     </TouchableOpacity>

     <View>
     <TouchableOpacity>
     <Text style={{marginTop:10, color:"grey"}}> Not a member? <Text style={{color:"orange", fontSize:15 ,fontWeight:'bold'}}>Signup</Text></Text>
     </TouchableOpacity>
     </View>
    </View> 
     )
    
}