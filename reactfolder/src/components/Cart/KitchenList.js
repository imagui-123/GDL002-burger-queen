import React, { Component } from "react";
import KitchenItem from "./kitchenItem";
import firebase from "firebase";


export default class KitchenList extends Component {
  
    render() {
      const { value } = this.props;
      const { cart } = this.props.value;
      return (
        <div className="container-fluid">
          {cart.map(item => (
            <KitchenItem key={item.id} item={item} value={value} />
          ))}
        </div>
      );
    }
  } 