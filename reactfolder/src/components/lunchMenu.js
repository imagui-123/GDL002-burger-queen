import React, {Component} from "react";
import { ProductConsumer } from "../context";

import KitchenList from "./Cart/KitchenList";
import EmptyCart from "./Cart/emptyCart";

export default class CartKitchen extends Component {
    
        render(){
            return(
               <ProductConsumer>
                {value => {
                    const {cart}= value;
                if(cart.length > 0){
                    return (
                        <KitchenList value={value} />
                    );
                }else{
                    return<EmptyCart />;
                }
                }}           
               </ProductConsumer>
            );
        }
}
