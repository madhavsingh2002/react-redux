import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: 0,
    };
  }

  componentDidMount() {
    this.updateCartItems(this.props.cartData);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cartData !== this.props.cartData) {
      this.updateCartItems(this.props.cartData);
    }
  }

  updateCartItems = (cartData) => {
    this.setState({ cartItems: cartData.length });
  };

  render() {
    const { cartItems } = this.state;

    return (
      <View style={{ height: 30, alignItems: 'flex-end', paddingHorizontal: 20 }}>
        <Text>Cart : {cartItems}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cartData: state.reducer,
});

export default connect(mapStateToProps)(Header);
