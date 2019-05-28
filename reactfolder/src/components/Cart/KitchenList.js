import React, { Component } from "react";
import KitchenItem from "./kitchenItem";
import firebase from "firebase";


export default class KitchenList extends Component {
  constructor(){
    super();
    this.state ={
        name: "",
        howMany: "",
        orders:[]
        
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
    handleChange(e) {
      const {id } = this.props;
      let tempProducts=[...this.state.products];
      const index = tempProducts.indexOf(this.getItem(id));
      const product= tempProducts[index];
      product.inCart = true;
      product.count=1;
      e.preventDefault();
      const orderRef=firebase.database().ref('orders');
      
      const order={
        name: [...tempProducts],
        howMany: [...this.state.cart, product]
      }

      orderRef.push(order);
      this.setState({
          
              products: "", 
                  cart: ""
                //  detailProduct: {...product}
              
      }) 
    }

    componentDidMount(){
      const orderRef = firebase.database().ref('orders');
      orderRef.on('value', (snapshot) => {
        let orders = snapshot.val();
        let newState = [];
        for (let item in orders) {
          newState.push({
            id: item,
            name: orders[item].name,
            howMany: orders[item].howMany
          });
        }
        this.setState({
          orders: newState
        });
      });
    }

  
  render() {
    const { value, item, id } = this.props;
    const { cart , removeOrder} = this.props.value;
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="container-fluid">
        {cart.map(item => (
          <KitchenItem key={item.id} item={item} value={value} />
      
        ))}
        {/* <button onClick={() => removeOrder(item.id)}>Remove Item</button>*/}
      </div>
      </form>
      
    );
  }
}