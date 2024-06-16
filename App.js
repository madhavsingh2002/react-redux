import React from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import Header from "./Components/Header";
import Product from "./Components/Product";

const App = () => {
  const products = [
    {
        id: 1,
        name: "Dummy Product 1",
        price: 29.99,
        category: "Electronics",
        image: "https://unsplash.com/photos/a-stack-of-folded-clothes-sitting-on-top-of-a-wooden-stool-QsnEj9MHsR8",
        description: "This is a dummy product used for testing purposes. It includes all the necessary details such as name, price, category, and an image."
    },
    {
        id: 2,
        name: "Dummy Product 2",
        price: 59.99,
        category: "Books",
        image: "https://source.unsplash.com/random/400x400?books",
        description: "This is a dummy product used for testing purposes. It includes all the necessary details such as name, price, category, and an image."
    },
    {
        id: 3,
        name: "Dummy Product 3",
        price: 19.99,
        category: "Clothing",
        image: "https://source.unsplash.com/random/400x400?clothing",
        description: "This is a dummy product used for testing purposes. It includes all the necessary details such as name, price, category, and an image."
    },
    {
        id: 4,
        name: "Dummy Product 4",
        price: 89.99,
        category: "Furniture",
        image: "https://source.unsplash.com/random/400x400?furniture",
        description: "This is a dummy product used for testing purposes. It includes all the necessary details such as name, price, category, and an image."
    },
    {
        id: 5,
        name: "Dummy Product 5",
        price: 99.99,
        category: "Appliances",
        image: "https://source.unsplash.com/random/400x400?appliances",
        description: "This is a dummy product used for testing purposes. It includes all the necessary details such as name, price, category, and an image."
    }
  ];

  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <View >
        {
          products.map((item) => 
            <Product key={item.id} item={item}/>
          )
      }
      </View>
    </ScrollView>
  );
};

export default App;
