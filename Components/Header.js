import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const Header = () =>{
  const cartData = useSelector((state)=> state.reducer)
  const [cartItems, setCartItems] = useState(0);
  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])
  return (
    <View style={{height: 30, alignItems:'flex-end', paddingHorizontal: 20}}>
      <Text>Cart : {cartItems}</Text>
    </View>
  )
}
export default Header;