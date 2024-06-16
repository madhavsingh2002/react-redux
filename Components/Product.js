import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { addToCast, removeToCast } from "./Redux/action";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false,
    };
  }

  componentDidMount() {
    this.updateIsAdded();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cartItems !== this.props.cartItems) {
      this.updateIsAdded();
    }
  }

  updateIsAdded = () => {
    const { cartItems, item } = this.props;
    const result = cartItems.filter(val => val.name === item.name);
    this.setState({ isAdded: result.length > 0 });
  };

  handleAddToCart = item => {
    this.props.addToCast(item);
  };

  handleRemoveFromCart = item => {
    this.props.removeToCast(item.name);
  };

  render() {
    const { item } = this.props;
    const { isAdded } = this.state;

    return (
      <View key={item.id} style={styles.product}>
        <Image source={require('../asset/download.jpeg')} style={styles.image} />
        <Text>{item.name}</Text>
        <Text>${item.price.toFixed(2)}</Text>
        {isAdded ? (
          <Button title="Remove To Cart" onPress={() => this.handleRemoveFromCart(item)} />
        ) : (
          <Button title="Add To Cart" onPress={() => this.handleAddToCart(item)} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    padding: 10,
  },
  product: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
});

const mapStateToProps = state => ({
  cartItems: state.reducer,
});

const mapDispatchToProps = {
  addToCast,
  removeToCast,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
